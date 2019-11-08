import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

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
    onClick?: (e: React.MouseEvent, eventID: string) => void;
}

/**
 * Specifies one item in the breadcrumb list.
 */
export default class BreadcrumbItem extends React.Component<BreadcrumbItemProps, NoProps> {

    static defaultProps = {
        active: false,
        href: '#'
    }

    handleClick = (e: React.MouseEvent): void => {
        if (this.props.onClick) {
            this.props.onClick(e, this.props.eventID);
        }
    }

    render() {
        const css: string = mergeCSS('breadcrumb-item', {
            'active': this.props.active
        }, this.props.className);

        const extra: any = getProps(this.props);

        let children = this.props.children;
        if (!this.props.active) {
            children = <a href={this.props.href} onClick={this.handleClick}>{this.props.children}</a>;
        }

        return <li {...extra} className={css} aria-current='page'>
            {children}
        </li>;
    }
}
