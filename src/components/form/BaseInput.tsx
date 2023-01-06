/**
 * bedrock - UI Component Library
 * https://github.com/sangupta/bedrock
 *
 * MIT License.
 * Copyright (c) 2022, Sandeep Gupta.
 *
 * Use of this source code is governed by a MIT style license
 * that can be found in LICENSE file in the code repository.
 */

import React from 'react';
import { BaseProps, ComponentSize, HtmlInputType } from '../../types';
import { buildCss, validateField } from '../../Utils';
import { FormContext } from './Form';
import { FormFieldPayload, FormValueValidator } from './FormTypes';

interface BaseInputProps<T> extends BaseProps {

    /**
     * The actual HTML element to emit. The default value
     * is `input`.
     */
    as?: string;

    /**
     * The type of element to render. 
     */
    type?: HtmlInputType;

    /**
     * The initial value of the component 
     */
    value?: T;

    /**
     * The form to bind to, unless its the nearest ancestoral form
     */
    form?: string;

    /**
     * The attribute name to use when storing the value in `Form`
     */
    name: string;

    /**
     * Size for the component
     */
    size?: ComponentSize;

    /**
     * Value required or not?
     */
    required?: boolean;

    /**
     * Min value. Applicable for date, month, week, time, datetime-local, number, range
     */
    min?: string | number;

    /**
     * Max value. Applicable for date, month, week, time, datetime-local, number, range
     */
    max?: string | number;

    /**
     * Incremental value. Applicable for date, month, week, time, datetime-local, number, range
     */
    step?:string|number;

    /**
     * Validators, if any, required on the component
     */
    validators?: Array<FormValueValidator<T>>;

    /**
     * Whether to show invalid state via red border and an
     * icon or not. This adds CSS class `is-invalid` to the
     * component.
     */
    showInvalidState?: boolean;

    /**
     * This method is responsible for converting the change event
     * to the value of this form field. For example, for `type='text'`
     * we use `e.target.value` as the value, whereas for `type='checkbox'`
     * we use `e.target.checked` as the value. This allows the strongly
     * typed form fields to keep using this implementation without
     * much change internally.
     */
    valueConverter: (e: React.ChangeEvent<HTMLInputElement>) => T;

    /**
     * This method is responsible for detecting if the field has a
     * value or not. This is useful with `strings` to check if the
     * value of the field is empty or not. A required `text` field
     * would need a non-empty value to be valid.
     */
    hasValue: (value: T) => boolean;

    /**
     * Handler invoked when value of this field changes
     */
    onChange?: (payload: FormFieldPayload<T>, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * State attributes for the component
 */
interface BaseInputState<T> {

    /**
     * Updated value as entered by the user
     */
    value: any;

    isValid: boolean;
}

/**
 * The `input type='*'` component. This component is used directly by
 * various implementations such as `TextInput`, `NumberInput`, `EmailInput`
 * etc. You should prefer to use these implementations unless you have a
 * custom use-case that those implementation do not provide for.
 * 
 * @author sangupta
 */
export default class BaseInput<T> extends React.Component<BaseInputProps<T>, BaseInputState<T>> {

    /**
     * The form context that we bind to
     */
    static contextType = FormContext;

    /**
     * the default properties
     */
    static defaultProps = {
        size: 'default',
        showInvalidState: true,
        as: 'input'
    }

    /**
     * define the type of context we have
     */
    declare context: React.ContextType<typeof FormContext>

    constructor(props: BaseInputProps<T>) {
        super(props);

        this.state = {
            value: props.value,
            isValid: true
        }
    }

    /**
     * Must pass our value to the parent Form at load so that
     * if the form needs to pass its value to callee, it can.
     */
    componentDidMount() {
        const { value } = this.state;
        const errorMessage = this.validateForm(value);
        const isValid = errorMessage === undefined;
        this.updateForm(value, isValid);
    }

    /**
     * Method called when the value of the input box changes. This
     * method allows us to propogate the value back to the form
     * and do other stuff like validity check.
     * 
     * @param value 
     */
    validateForm = (value: any): string => {
        // run validators
        let errorMessage = validateField(value, this.props.validators);
        if (errorMessage) {
            return errorMessage;
        }

        // is required
        if (this.props.required && !this.props.hasValue(value)) {
            return 'required';
        }

        // all valid
        return undefined;
    }

    updateForm = (value: any, isValid: boolean): void => {
        this.context.updateForm(this.props.form || this.context.formName, this.props.name, value, isValid);
    }

    /**
     * Change listener whenever the value changes in the input box.
     * 
     * @param e 
     */
    handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedValue = this.props.valueConverter(e);

        // update the form component if any
        const errorMessage = this.validateForm(updatedValue);
        const isValid = errorMessage === undefined;

        // update internal state
        this.setState({ value: updatedValue, isValid: isValid });
        this.updateForm(updatedValue, isValid);

        // bubble this up to handlers, as needed
        if (this.props.onChange) {
            const fieldPayload: FormFieldPayload<T> = {
                errorMessage: errorMessage,
                isRequired: this.props.required,
                isValid: isValid,
                value: updatedValue
            }

            this.props.onChange(fieldPayload, e);
        }
    }

    render(): React.ReactNode {
        const {
            // component props
            type, value, form, name, size, required, validators, onChange, showInvalidState, valueConverter, hasValue, as,

            // standard props
            children, className, ...extraProps
        } = this.props;

        const css = buildCss({
            'form-control': type !== 'checkbox',
            'form-check-input': type === 'checkbox',
            'form-control-lg': size === 'large',
            'form-control-sm': size === 'small',
            'form-range': type === 'range',
            'is-invalid': showInvalidState && !this.state.isValid
        }, className);

        // add form name only when need be
        const formName = this.props.form || this.context.formName;
        if (formName) {
            extraProps['form'] = formName;
        }

        // add value render, for checkbox we use `checked` attribute
        if ((type || '').toLowerCase() === 'checkbox') {
            extraProps['checked'] = this.state.value || false;
        } else {
            extraProps['value'] = this.state.value;
        }

        // render the element
        const Element: any = as;
        return <Element
            type={type}
            className={css}
            name={name}
            onChange={this.handleValueChange}
            required={required}
            {...extraProps} />
    }

}
