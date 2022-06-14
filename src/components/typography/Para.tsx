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
interface ParaProps extends BaseProps {
    /**
     * Theme variant to use
     */
    variant?: Variant;

    /**
     * Is this the leading paragraph?
     */
    leadPara?: boolean;

    /**
     * Text alignment within the paragraph.
     */
    textAlign?: Alignment;

    /**
     * Wrapping mode to use.
     */
    wrapMode?: '' | 'wrap' | 'no-wrap';

    /**
     * Any text-transformation to use
     */
    transform?: TextTransform;
}

/**
 * The paragraph component.
 * 
 * @author sangupta
 */
export default class Para extends React.PureComponent<ParaProps> {

    /**
     * the default properties
     */
    static defaultProps: ParaProps = {
        variant: 'primary',
        leadPara: false,
        wrapMode: ''
    }

    render(): React.ReactNode {
        const { className, children, variant, leadPara, textAlign, wrapMode, transform, ...extraProps } = this.props;
        const css = buildCss(className, {
            'text-': variant,
            'lead': leadPara,
        }, {
            'text-': textAlign,
        }, {
            'text-': wrapMode,
        }, {
            'text-': transform
        });

        return <p className={css} {...extraProps}>{children}</p>
    }

}
