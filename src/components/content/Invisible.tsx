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

interface InvisibleProps extends BaseProps {

    /**
     * Whether the content is invisible or not.
     */
    invisible?: boolean;

}

/**
 * Control the visibility of elements, without modifying 
 * their display, with visibility utilities. This is useful
 * when you want the content to be a part of the DOM tree
 * but hidden from user's view.
 * 
 * @author sangupta
 */
export default class Invisible extends React.Component<InvisibleProps> {

    static defaultProps = {
        invisible: true
    }

    render(): React.ReactNode {
        const { invisible, className, children, ...extraProps } = this.props;

        const css: string = buildCss(invisible ? 'invisible' : 'visible', className);

        return <div {...extraProps} className={css}>
            {this.props.children}
        </div>
    }

}
