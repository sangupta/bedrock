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

interface FlexBoxProps extends BaseProps {

    /**
     * `justify-content` value
     */
    justifyContent?: FlexJustifyContent

    /**
     * `align-content` value
     */
    alignContent?: FlexAlignContent

    /**
     * Reverse the arrangement of items inside this container
     */
    reverse?: boolean;

    /**
     * The flex direction
     */
    direction: FlexDirection;

}

/**
 * Layout children in horizontal row.
 * 
 * @author sangupta
 */
export default class FlexBox extends React.PureComponent<FlexBoxProps> {

    render(): React.ReactNode {
        const { justifyContent, alignContent, direction, reverse, className, children, ...extraProps } = this.props;

        const css = buildCss('d-flex', {
            'flex-': direction,
            'flex-row-reverse': reverse
        }, className);

        const style = {
            justifyContent: justifyContent,
            alignContent: alignContent
        };

        return <div className={css} style={style} {...extraProps}>{children}</div>
    }

}
