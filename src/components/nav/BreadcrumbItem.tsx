import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface BreadcrumbItemProps extends BaseProps {
    /**
     * Is the breadcrumb active?
     */
    active?: boolean;

    /**
     * The HREF link to use for the breadcrumb link
     */
    href?: string;

    /**
     * Method to call when the breadcrumb link is clicked
     */
    onClick?: React.MouseEventHandler<any>;
}

/**
 * Specifies one item in the breadcrumb list.
 */
export default class BreadcrumbItem extends React.Component<BreadcrumbItemProps, any> {

    static defaultProps = {
        active: false,
        href: '#'
    }

    render() {
        const css: string = mergeCSS('breadcrumb-item', {
            'active': this.props.active
        }, this.props.className);

        let children = this.props.children;
        if (!this.props.active) {
            children = <a href={this.props.href} onClick={this.props.onClick}>{this.props.children}</a>;
        }

        return <li className={css} aria-current='page'>
            {children}
        </li>;
    }
}
