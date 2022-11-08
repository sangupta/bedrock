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
import { BaseProps, Variant } from '../../types';
import { buildCss } from '../../Utils';

/**
 * Props for the component.
 */
interface LinkProps extends BaseProps {
    variant?: Variant;

    href?: string;

    active?: boolean;
}

/**
 * The `anchor` or a simple hyperlink component.
 * 
 * @author sangupta
 */
export default class Link extends React.PureComponent<LinkProps> {

    /**
     * the default properties
     */
    static defaultProps: LinkProps = {
        variant: 'primary',
        href: '#',
        active: false
    }

    render(): React.ReactNode {
        const { variant, href, active, children, className, ...extraProps } = this.props;
        const css = buildCss({
            'link-': variant,
            'active': active,
        }, className);

        return <a href={href} className={css} {...extraProps}>{children}</a>;
    }

}
