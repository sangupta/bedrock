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
import BaseInput from './BaseInput';

interface CheckboxProps extends BaseProps {

    /**
     * The initial value of the component 
     */
    checked?: boolean;

    /**
     * The form to bind to, unless its the nearest ancestoral form
     */
    form?: string;

    /**
     * The attribute name to use when storing the value in `Form`
     */
    name: string;

    /**
     * Specify the role for the checkbox
     */
    role?: string;

    /**
     * Size for the component
     */
    size?: ComponentSize;

    /**
     * Validators, if any, required on the component
     */
    validators?: Array<Validator<boolean>>;

    /**
     * Whether to show invalid state via red border and an
     * icon or not. This adds CSS class `is-invalid` to the
     * component.
     */
    showInvalidState?: boolean;

    /**
     * Handler invoked when value of this field changes
     */
    onChange?: (payload: FormFieldPayload<boolean>, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * The `input type='checkbox'` component.
 * 
 * @author sangupta
 */
export default class Checkbox extends React.PureComponent<CheckboxProps> {

    static defaultProps = {
        value: false
    }

    handleValueConversion(e: React.ChangeEvent<HTMLInputElement>): boolean {
        return e.target.checked;
    }

    hasValue(value: boolean): boolean {
        // we always return true, as the checkbox always has a value
        return true;
    }

    render(): React.ReactNode {
        const { children, checked, ...extraProps } = this.props;

        return <BaseInput<boolean>
            type='checkbox'
            {...extraProps}
            valueConverter={this.handleValueConversion}
            value={checked}
            hasValue={this.hasValue}>
            {children}
        </BaseInput>
    }

}
