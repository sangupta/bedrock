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
import { ComponentSize } from '../../types';
import Checkbox from './Checkbox';
import { FormFieldPayload, FormValueValidator } from './FormTypes';

interface SwitchProps {
    /**
     * The initial value of the component 
     */
    selected?: boolean;

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
    validators?: Array<FormValueValidator<boolean>>;

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

export default class Switch extends React.Component<SwitchProps> {

    render(): React.ReactNode {
        const { selected, ...extraProps } = this.props;

        const Element: any = Checkbox;
        return <div className="form-check form-switch">
            <Element checked={selected} {...extraProps} role="switch" />
        </div>
    }

}
