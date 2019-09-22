import * as React from 'react';
import { BaseProps, getProps, NoProps } from '../../BedrockUtils';

interface LinkProps extends BaseProps {
    /**
     * The destination for this link
     */
    href?: string;

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
        href: '#'
    }

    handleClick = (e: React.MouseEvent) => {
        if (this.props.onClick) {
            e.preventDefault();
            this.props.onClick(e);
        }
    }

    render() {
        const extra: any = getProps(this.props);

        return <a {...extra} href={this.props.href} onClick={this.handleClick}>
            {this.props.children}
        </a>;
    }
}
