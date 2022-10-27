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
import { buildCss, buildProps } from '../../Utils';
import { FormContext } from './Form';

interface SelectProps extends BaseProps {
    /**
     * The form to bind to, unless its the nearest ancestoral form
     */
    form?: string;

    /**
     * The attribute name to use when storing the value in `Form`
     */
    name?: string;

    ariaLabel?: string;

    multiple?: boolean;

    disabled?: boolean;

    /**
     * Size for the component
     */
    size?: 'default' | 'large' | 'small';

    /**
     * The initial value of the component 
     */
    defaultValue?: string;

    options?: Array<SelectOptionData>;

    onChange: (payload: FormFieldPayload<string>, e: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * The `select` component.
 * 
 * @author sangupta
 */
export default class Select extends React.Component<SelectProps> {

    /**
     * The form context that we bind to
     */
    static contextType = FormContext;

    /**
    * define the type of context we have
    */
    declare context: React.ContextType<typeof FormContext>

    static defaultProps = {
        ariaLabel: '',
        multiple: false,
        disabled: false,
        size: 'default'
    }

    renderOptions = (children: React.ReactNode): any => {
        const numChildren = React.Children.count(children);
        if (numChildren > 0) {
            return children;
        }

        const { options } = this.props;
        if (options && options.length > 0) {
            return options.map((option: SelectOptionData) => {
                <SelectOption value={option.value} label={option.label} />
            })
        }

        return null;
    }

    handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        this.context.updateForm(this.props.form || this.context.formName, this.props.name, value, true);
        if (this.props.onChange) {
            const payload: FormFieldPayload<string> = {
                value: value,
                isValid: true,
                isRequired: false,
                errorMessage: ''
            };

            this.props.onChange(payload, e);
        }
    }

    render() {
        const { ariaLabel, className, multiple, disabled, defaultValue, options, children, size, ...extraProps } = this.props;
        const css: string = buildCss('form-select', className, {
            'form-select-lg': size === 'large',
            'form-select-sm': size === 'small'
        });

        const updatedProps = buildProps(extraProps, {
            'multiple': multiple,
            'disabled': disabled
        })

        if (multiple) {
            extraProps['multiple'] = 'multiple';
        }

        return <select className={css} aria-label={ariaLabel} {...updatedProps} defaultValue={defaultValue} onChange={this.handleChange}>
            {this.renderOptions(children)}
        </select>
    }

}

interface SelectOptionProps {
    value?: string;
    label: string;
}

export class SelectOption extends React.Component<SelectOptionProps> {

    render() {
        const { value, label } = this.props;
        return <option value={value || label}>{label}</option>
    }

}
