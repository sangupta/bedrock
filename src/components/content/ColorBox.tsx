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
interface ColorBoxProps extends BaseProps {
    color: string;

    label?: string;

    onClick?: (color: string, e: React.MouseEvent) => void;
}

/**
 * The `img` component.
 * 
 * @author sangupta
 */
export default class Image extends React.PureComponent<ColorBoxProps> {

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
