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

export type BlockQuoteProps = BaseProps & React.HTMLProps<HTMLQuoteElement>;

/**
 * The `blockquote` component.
 * 
 * @author sangupta
 */
export default class BlockQuote extends React.PureComponent<BlockQuoteProps> {

    render(): React.ReactNode {
        const { className, children, ...extraProps } = this.props;
        const css: string = buildCss('blockquote', className);
        return <blockquote {...extraProps} className={css}>
            {children}
        </blockquote>
    }

}
