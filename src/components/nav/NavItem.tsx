import * as React from 'react';

import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface NavItemProps extends BaseProps {

    /**
     * CSS classes to be applied to child `anchor` element.
     * This is different from other components as the default
     * `className` attribute applies to actual `li` element.
     */
    linkCSS?: string;

    /**
     * Is the nav item active?
     */
    active?: boolean;

    /**
     * Is the nav item disabled?
     */
    disabled?: boolean;

    /**
     * The HREF link to use for the nav item link
     */
    href?: string;
}

/**
 * Useful to display basic navigation.
 */
export default class NavItem extends React.Component<NavItemProps, NoProps> {

    static defaultProps = {
        linkCSS: '',
        active: false,
        disabled: false,
        href: '#'
    }

    render() {
        const css: string = mergeCSS('nav-item', this.props.className);

        const linkCSS: string = mergeCSS('nav-link', {
            active: this.props.active,
            disabled: this.props.disabled
        }, this.props.linkCSS);

        const extra:any = getProps(this.props);

        return <li {...extra} className={css}>
            <a className={linkCSS} href={this.props.href}>{this.props.children}</a>
        </li>;
    }

}
