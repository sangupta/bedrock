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
import { BaseProps, ComponentSize } from '../../types';
import BaseInput from './BaseInput';
import { FormFieldPayload, FormValueValidator } from './FormTypes';

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
    validators?: Array<FormValueValidator<string>>;

    /**
     * Whether to show invalid state via red border and an
     * icon or not. This adds CSS class `is-invalid` to the
     * component.
     */
    showInvalidState?: boolean;

    /**
     * The placeholder to display
     */
    placeholder?: string;

    maxLength?: number;

    /**
     * Handler invoked when value of this field changes
     */
    onChange?: (payload: FormFieldPayload<string>, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * The `input type="text"` component.
 * 
 * @author sangupta
 */
export default class TextInput extends React.PureComponent<TextInputProps> {

    static defaultProps = {
        value: ''
    }

    handleValueConversion(e: React.ChangeEvent<HTMLInputElement>): string {
        return e.target.value;
    }

    hasValue(value: string): boolean {
        if (value && value.length > 0) {
            return true;
        }

        return false;
    }

    render(): React.ReactNode {
        const { children, ...extraProps } = this.props;

        return <BaseInput<string> type='text' {...extraProps} valueConverter={this.handleValueConversion} hasValue={this.hasValue}>{children}</BaseInput>
    }

}
