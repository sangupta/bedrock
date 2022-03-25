/**
 *
 * bedrock - UI Component Library
 * Copyright (c) 2020, Sandeep Gupta
 *
 * https://bedrock.sangupta.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 		http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import React from 'react';
import { buildCss, validateField } from '../../Utils';
import { FormContext } from './Form';

interface BaseInputProps<T> extends BaseProps {

    /**
     * The type of element to render. 
     */
    type: string;

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
     * Validators, if any, required on the component
     */
    validators?: Array<Validator<T>>;

    /**
     * Whether to show invalid state via red border and an
     * icon or not. This adds CSS class `is-invalid` to the
     * component.
     */
    showInvalidState?: boolean;

    valueConverter: (e: React.ChangeEvent<HTMLInputElement>) => T;

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
 * The `input type='text'` component.
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
        showInvalidState: true
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
            type, value, form, name, size, required, validators, onChange, showInvalidState, valueConverter, hasValue,

            // standard props
            children, className, ...extraProps
        } = this.props;

        const css = buildCss('form-control', {
            'form-control-lg': size === 'large',
            'form-control-sm': size === 'small',
            'is-invalid': showInvalidState && !this.state.isValid
        }, className);
        const formName = this.props.form || this.context.formName;

        return <input type={type}
            className={css}
            onChange={this.handleValueChange}
            value={this.state.value}
            form={formName}
            required={required}
            {...extraProps}
        />
    }

}
