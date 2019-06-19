import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface ButtonProps extends BaseProps {
    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    /**
     * Size of the button
     */
    size?: 'large' | 'small' | 'default';

    /**
     * Icon to show inside the button
     */
    icon?: string;

    /**
     * Text label to display on the button, only, if children
     * to this component are not specified
     */
    title?: string;

    /**
     * Handler to be invoked when button is clicked
     */
    onClick?: React.MouseEventHandler;
}

export default class Button extends React.Component<ButtonProps, any> {

    static defaultProps = {
        variant: 'primary',
        size: 'default'
    }

    render() {
        const css: string = mergeCSS('btn', 'btn-' + this.props.variant, { 
            'btn-lg': this.props.size === 'large',
            'btn-sm': this.props.size === 'small'
        }, this.props.className);

        const children = this.props.children ? this.props.children : this.props.title;

        if (this.props.icon) {
            return <a href='#' className={css} onClick={this.props.onClick}>
                <i className={this.props.icon} />&nbsp;
            {children}
            </a>;
        }

        return <a href='#' className={css} onClick={this.props.onClick}>
            {children}
        </a>;
    }
}
