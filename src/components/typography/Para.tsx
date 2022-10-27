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
