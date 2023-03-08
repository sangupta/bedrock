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
interface HeadingProps extends BaseProps, React.HTMLProps<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;

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
        level: 1,
        displayHeading: false,
        asParagraph: false
    }

    render(): React.ReactNode {
        const { level, displayHeading, asParagraph, className, children, ...extraProps } = this.props;
        const css: string = buildCss(className, displayHeading ? 'display-' + level : '');

        if (!asParagraph) {
            const Element: any = 'h' + level;
            return <Element className={css}>{children}</Element>
        }

        return <p {...extraProps} className={buildCss({ h: level }, css)}>{children}</p>
    }

}
