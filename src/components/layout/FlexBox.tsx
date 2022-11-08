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
import { BaseProps, FlexAlignContent, FlexDirection, FlexJustifyContent } from '../../types';
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
