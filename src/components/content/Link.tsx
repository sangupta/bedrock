import * as React from 'react';
import { BaseProps, getProps } from './../../BedrockUtils';

interface LinkProps extends BaseProps {
    href?: string;

    /**
     * Handler to be invoked when link is clicked
     */
    onClick?: React.MouseEventHandler;
}

export default class Link extends React.Component<LinkProps, any> {

    static defaultProps = {
        href: '#'
    }

    render() {
        const extra:any = getProps(this.props);
        
        return <a {...extra} href={this.props.href} onClick={this.props.onClick}>
            {this.props.children}
        </a>;
    }
}
