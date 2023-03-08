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
import { BaseProps, BoxAlign, BoxJustify } from '../../types';
import { buildCss } from '../../Utils';

export interface VBoxProps extends BaseProps {

    /**
     * Horizontal justification to use when aligning elements inside
     */
    justify?: BoxJustify;

    /**
     * Vertical justification to use when aligning items
     */
    align?: BoxAlign;

    /**
     * Reverse the arrangement of items inside this container
     */
    reverse?: boolean;

}

/**
 * Layout children in horizontal row.
 * 
 * @author sangupta
 */
export default class VBox extends React.PureComponent<VBoxProps> {

    render(): React.ReactNode {
        const { justify, align, reverse, className, children, ...extraProps } = this.props;

        const css = buildCss('d-flex', 'flex-column', {
            'flex-row-reverse': reverse,
            'justify-content-': justify,
            'align-items-': align
        }, className);

        return <div className={css} {...extraProps}>{children}</div>
    }

}
