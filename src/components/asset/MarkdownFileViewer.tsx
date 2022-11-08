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
