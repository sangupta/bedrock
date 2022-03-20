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
