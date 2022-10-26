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

interface MarkdownFileViewerProps extends BaseProps {

    /**
     * The markdown content represented as `string`
     */
    contents?: string;

    /**
     * The markdown renderer to use, for example, `react-markdown`.
     */
    renderer: any;

    /**
     * `prop` to use in `renderer` supplied component when sending
     * markdown. If the value is `null` or `undefined`, content is
     * passed as `children`.
     */
    propName?: string;
}

/**
 * A markdown component that uses an external markdown library
 * to parse and display contents. For example, you may use
 * `react-markdown` library and pass its instance to render the
 * content. This is only a wrapper around the markdown parser
 * component.
 *  
 * @author sangupta
 */
export default class MarkdownFileViewer extends React.Component<MarkdownFileViewerProps> {

    render(): React.ReactNode {
        const { contents, renderer, propName, className, ...extraProps } = this.props;
        if (!contents) {
            return null;
        }

        const props = {};
        if (propName) {
            props[propName] = contents;
        }
        const kids = propName ? null : contents;

        const Element: any = React.createElement(renderer, props, kids);

        return <div className={buildCss('markdown-content', className)} {...extraProps}>
            <Element />
        </div>
    }

}
