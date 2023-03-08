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
import { FormFieldPayload } from './FormTypes';

export interface RangeInputProps extends BaseProps {

    /**
     * The initial value of the component 
     */
    value?: number;

    min?: number;

    max?: number;

    step?: number;

    /**
     * The form to bind to, unless its the nearest ancestoral form
     */
    form?: string;

    /**
     * The attribute name to use when storing the value in `Form`
     */
    name: string;

    /**
     * Specify the role for the tel input
     */
    role?: string;

    /**
     * Size for the component
     */
    size?: ComponentSize;

    /**
     * Handler invoked when value of this field changes
     */
    onChange?: (payload: FormFieldPayload<number>, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * The `input type='date'` component.
 * 
 * @author sangupta
 */
export default class RangeInput extends React.PureComponent<RangeInputProps> {

    static defaultProps = {
        value: '',
        min: 0,
        max: 100,
        step: 1
    }

    handleValueConversion(e: React.ChangeEvent<HTMLInputElement>): number {
        return Number(e.target.value);
    }

    hasValue(value: number): boolean {
        return true;
    }

    render(): React.ReactNode {
        const { children, value, min, max, step, ...extraProps } = this.props;

        return <BaseInput<number>
            type='range'
            {...extraProps}
            min={min}
            max={max}
            step={step}
            valueConverter={this.handleValueConversion}
            value={value}
            hasValue={this.hasValue}>
            {children}
        </BaseInput>
    }

}
