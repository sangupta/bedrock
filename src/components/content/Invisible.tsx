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

    render() {
        const { invisible, className, children, ...extraProps } = this.props;

        const css: string = buildCss(invisible ? 'invisible' : 'visible', className);

        return <div {...extraProps} className={css}>
            {this.props.children}
        </div>
    }

}
