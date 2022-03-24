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

interface TextInputProps extends BaseProps {

    /**
     * The initial value of the component 
     */
    value?: string;

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
    validators?: Array<Validator<string>>;

    /**
     * Whether to show invalid state via red border and an
     * icon or not. This adds CSS class `is-invalid` to the
     * component.
     */
    showInvalidState?: boolean;

    /**
     * Handler invoked when value of this field changes
     */
    onChange?: (payload: FormFieldPayload, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * State attributes for the component
 */
interface TextInputState {

    /**
     * Updated value as entered by the user
     */
    value: string;

    isValid: boolean;
}

/**
 * The `input type='text'` component.
 * 
 * @author sangupta
 */
export default class TextInput extends React.Component<TextInputProps, TextInputState> {

    /**
     * The form context that we bind to
     */
    static contextType = FormContext;

    /**
     * the default properties
     */
    static defaultProps: TextInputProps = {
        name: '',
        value: '',
        size: 'default',
        showInvalidState: true
    }

    /**
     * define the type of context we have
     */
    declare context: React.ContextType<typeof FormContext>

    constructor(props: TextInputProps) {
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
        this.updateForm(this.state.value);
    }

    /**
     * Method called when the value of the input box changes. This
     * method allows us to propogate the value back to the form
     * and do other stuff like validity check.
     * 
     * @param value 
     */
    updateForm = (value: any): string => {
        // check validity
        let isValid = true;

        // run validators
        let errorMessage;
        if (isValid && value) {
            errorMessage = validateField(value, this.props.validators);
            isValid = errorMessage === undefined;
        }

        // is required
        if (isValid && this.props.required && !value) {
            isValid = false;
            errorMessage = 'required';
        }

        // update the form data
        this.context.updateForm(this.props.form || this.context.formName, this.props.name, value, isValid);

        // return error message
        return errorMessage;
    }

    /**
     * Change listener whenever the value changes in the input box.
     * 
     * @param e 
     */
    handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedValue = e.target.value;

        // update the form component if any
        const errorMessage = this.updateForm(updatedValue);
        const isValid = errorMessage === undefined;

        // update internal state
        this.setState({ value: updatedValue, isValid: isValid });

        // bubble this up to handlers, as needed
        if (this.props.onChange) {
            const fieldPayload: FormFieldPayload = {
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
            value, form, name, size, required, validators, onChange, showInvalidState,

            // standard props
            children, className, ...extraProps
        } = this.props;

        const css = buildCss('form-control', {
            'form-control-lg': size === 'large',
            'form-control-sm': size === 'small',
            'is-invalid': showInvalidState && !this.state.isValid
        }, className);
        const formName = this.props.form || this.context.formName;

        return <input type='text'
            className={css}
            onChange={this.handleValueChange}
            value={this.state.value}
            form={formName}
            required={required}
            {...extraProps}
        />
    }

}
