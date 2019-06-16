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
    size?: 'lg' | 'sm' | '';

    /**
     * Icon to show inside the button
     */
    icon?: string;

    /**
     * Text label to display on the button
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
        size: ''
    }

    render() {
        const css: string = mergeCSS('btn', 'btn-' + this.props.variant, { 'btn-': this.props.size }, this.props.className);

        if (this.props.icon) {
            return <a href='#' className={css} onClick={this.props.onClick}>
                <i className={this.props.icon} />&nbsp;
            {this.props.title}
            </a>;
        }

        return <a href='#' className={css} onClick={this.props.onClick}>
            {this.props.title}
        </a>;
    }
}
