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
import BaseInput from './BaseInput';

interface ColorInputProps extends BaseProps {

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
     * Specify the role for the checkbox
     */
    role?: string;

    /**
     * Size for the component
     */
    size?: ComponentSize;

    /**
     * Handler invoked when value of this field changes
     */
    onChange?: (payload: FormFieldPayload<string>, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * The `input type='color'` component.
 * 
 * @author sangupta
 */
export default class ColorInput extends React.PureComponent<ColorInputProps> {

    static defaultProps = {
        value: ''
    }

    handleValueConversion(e: React.ChangeEvent<HTMLInputElement>): string {
        return e.target.value;
    }

    hasValue(value: string): boolean {
        return !!value;
    }

    render(): React.ReactNode {
        const { children, value, ...extraProps } = this.props;

        return <BaseInput<string>
            type='color'
            {...extraProps}
            valueConverter={this.handleValueConversion}
            value={value}
            hasValue={this.hasValue}>
            {children}
        </BaseInput>
    }

}
