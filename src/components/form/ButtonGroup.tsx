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
import { buildCss } from '../../Utils';

/**
 * Props for the component.
 */
interface ButtonGroupProps extends BaseProps {

    ariaLabel?: string;

    role?: 'group' | 'toolbar' | string;

    /**
     * The size of the button
     */
    size?: ComponentSize;

    isVertical?: boolean;
}

/**
 * Used to group a bunch of buttons, such as in pagination or a toolbar.
 */
export default class ButtonGroup extends React.PureComponent<ButtonGroupProps> {

    /**
     * the default properties
     */
    static defaultProps: ButtonGroupProps = {
        ariaLabel: '',
        role: 'group',
        isVertical: false,
        size: 'default'
    }

    render(): React.ReactNode {
        const { ariaLabel, role, size, children, isVertical, className, ...extraProps } = this.props;

        const css = buildCss({
            'btn-group': !!!isVertical,
            'btn-group-vertical': !!isVertical,
            'btn-group-lg': size === 'large',
            'btn-group-sm': size === 'small'
        }, className);

        return <div className={css} role={role} aria-label={ariaLabel} {...extraProps}>{children}</div>
    }

}
