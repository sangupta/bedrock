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

interface NumberInputProps extends BaseProps {

    /**
     * The initial value of the component 
     */
    value?: number;

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
    validators?: Array<Validator<number>>;

    /**
     * Whether to show invalid state via red border and an
     * icon or not. This adds CSS class `is-invalid` to the
     * component.
     */
    showInvalidState?: boolean;

    placeholder?: string;

    /**
     * The minimum value
     */
    min?: number

    /**
     * The maximum value
     */
    max?: number;

    /**
     * Stepping value when up/down buttons are used
     */
    step?: number;

    /**
     * Handler invoked when value of this field changes
     */
    onChange?: (payload: FormFieldPayload<number>, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * The `input type="number"` component.
 * 
 * @author sangupta
 */
export default class NumberInput extends React.PureComponent<NumberInputProps> {

    static defaultProps = {
        value: 0
    }

    handleValueConversion(e: React.ChangeEvent<HTMLInputElement>): number {
        const value = e.target.value;
        if (value === '') {
            return 0;
        }

        return Number(value);
    }

    hasValue(value: number): boolean {
        const str = String(value);
        if (str.trim().length === 0) {
            return false;
        }

        return true;
    }

    render(): React.ReactNode {
        const { children, ...extraProps } = this.props;

        return <BaseInput<number> type='number' {...extraProps} valueConverter={this.handleValueConversion} hasValue={this.hasValue}>{children}</BaseInput>
    }

}
