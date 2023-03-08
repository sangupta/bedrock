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
import { buildCss } from '../../Utils';

/**
 * Props for the component.
 */
export interface ButtonGroupProps extends BaseProps {

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
