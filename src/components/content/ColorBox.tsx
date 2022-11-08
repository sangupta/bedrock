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
import { BaseProps } from '../../types';
import { buildCss } from '../../Utils';

/**
 * Props for the component.
 */
interface ColorBoxProps extends BaseProps {
    color: string;

    label?: string;

    onClick?: (color: string, e: React.MouseEvent) => void;
}

/**
 * A color box component.
 * 
 * @author sangupta
 */
export default class ColorBox extends React.PureComponent<ColorBoxProps> {

    /**
     * the default properties
     */
    static defaultProps = {
        label: ''
    }

    clickHandler = (e: React.MouseEvent) => {
        if (this.props.onClick) {
            this.props.onClick(this.props.color, e);
        }
    }

    render(): React.ReactNode {
        const { color, label, onClick, children, className, ...extraProps } = this.props;
        const hasHandlers = !!onClick;
        const css = buildCss('color-box', {
            'cursor-pointer': hasHandlers,
        }, className);

        return <div className={css}
            style={{ 'backgroundColor': this.props.color }}
            onClick={this.clickHandler}
            {...extraProps}>{label}</div>;
    }

}
