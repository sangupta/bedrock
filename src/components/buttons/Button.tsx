import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

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
    label?: string;

    /**
     * Handler to be invoked when button is clicked
     */
    onClick?: React.MouseEventHandler;
}

/**
 * Renders an `anchor` HTML element that looks like a button.
 * 
 * Buttons can be created using either the `children` or
 * using the `label` property. Preference is given to `children`
 * over the `label`s.
 */
export default class Button extends React.Component<ButtonProps, NoProps> {

    static defaultProps = {
        variant: 'primary',
        size: 'default'
    }

    handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const css: string = mergeCSS('btn', 'btn-' + this.props.variant, {
            'btn-lg': this.props.size === 'large',
            'btn-sm': this.props.size === 'small'
        }, this.props.className);

        const extra:any = getProps(this.props);
        const children = this.props.children ? this.props.children : this.props.label;

        if (this.props.icon) {
            return <a {...extra} href='#' className={css} onClick={this.handleClick}>
                <i className={this.props.icon} />&nbsp;
            {children}
            </a>;
        }

        return <a {...extra} href='#' className={css} onClick={this.handleClick}>
            {children}
        </a>;
    }
}
