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
interface IndicatorProps extends BaseProps {

    /**
     * Theming variant to use.
     */
    variant: Variant;

    /**
     * Text to render along side indicator. You may use this
     * in place of `children`.
     */
    label?: string;

}

/**
 * Renders a traffic light style indicator which can be
 * used as a status in notification area or along with 
 * bulleted items to represent their status. If a `label`
 * prop is specified, the component ignores and does not
 * render the children.
 * 
 * @author sangupta
 */
export default class Indicator extends React.PureComponent<IndicatorProps> {

    /**
     * the default properties
     */
    static defaultProps = {
        variant: 'primary',
        label: ''
    }

    render(): React.ReactNode {
        const { variant, label, children, className, ...extraProps } = this.props;
        const css = buildCss('indicator', className);

        return <div className={css} {...extraProps}>
            <span className={'indicator-dot bg-' + variant} />
            {!!label ? label : children}
        </div>
    }

}
