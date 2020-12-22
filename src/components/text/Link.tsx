import * as React from 'react';
import { BaseProps, getProps, NoProps, Variant, mergeCSS } from '../../BedrockUtils';

interface LinkProps extends BaseProps {
    /**
     * The destination for this link
     */
    href?: string;

    /**
     * Style variant for this component
     */
    variant?: Variant;

    /**
     * Is the link active
     */
    active?:boolean;

    /**
     * Handler to be invoked when link is clicked
     */
    onClick?: React.MouseEventHandler;
}

/**
 * Render a hyperlink with the given content (as children). In case
 * the `onClick` handler is provided, the `href` functionality will
 * not be invoked. 
 */
export default class Link extends React.Component<LinkProps, NoProps> {

    static defaultProps = {
        href: '#',
        variant: 'primary'
    }

    handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const css: string = mergeCSS({ 'link-': this.props.variant, active : this.props.active }, this.props.className);
        const extra: any = getProps(this.props);

        return <a {...extra} className={css} href={this.props.href} onClick={this.handleClick}>
            {this.props.children}
        </a>;
    }
}
