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
interface HeadingProps extends BaseProps {
    size?: 1 | 2 | 3 | 4 | 5 | 6;

    displayHeading?: boolean;

    asParagraph?: boolean;
}

/**
 * All HTML headings, `<h1>` to `<h6>`. Allows style augmentation
 * on a `<p>` tag too.
 * 
 * @author sangupta
 */
export default class Heading extends React.PureComponent<HeadingProps> {

    /**
     * the default properties
     */
    static defaultProps: HeadingProps = {
        size: 1,
        displayHeading: false,
        asParagraph: false
    }

    render(): React.ReactNode {
        const { size, displayHeading, asParagraph, className, children, ...extraProps } = this.props;
        const css: string = buildCss(className, displayHeading ? 'display-' + size : '');

        if (!asParagraph) {
            const Element: any = 'h' + size;
            return <Element className={css}>{children}</Element>
        }

        return <p {...extraProps} className={buildCss({ h: size }, css)}>{children}</p>
    }

}
