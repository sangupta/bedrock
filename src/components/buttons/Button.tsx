import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps, Variant } from './../../BedrockUtils';

interface ButtonProps extends BaseProps {
    /**
     * Element styling to be applied
     */
    variant?: Variant;

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
     * Render buttons as outline rather than completely filled
     */
    outline?:boolean;

    /**
     * Make the button look disabled
     */
    disabled?:boolean;

    /**
     * Handler to be invoked when button is clicked
     */
    onClick?: (e: React.MouseEvent, eventID: string) => void;
}

/**
 * Renders an `anchor` HTML element that looks like a button.
 * 
 * Buttons can be created using either the `children` or
 * using the `label` `prop`. Preference is given to `children`
 * over the `prop`.
 */
export default class Button extends React.Component<ButtonProps, NoProps> {

    static defaultProps = {
        variant: 'primary',
        size: 'default',
        outline: false,
        disabled:false
    }

    handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (this.props.onClick) {
            this.props.onClick(e, this.props.eventID);
        }
    }

    render() {
        const prefix:string = this.props.outline ? 'btn-outline-' : 'btn-';
        const css: string = mergeCSS('btn', prefix + this.props.variant, {
            'btn-lg': this.props.size === 'large',
            'btn-sm': this.props.size === 'small'
        }, this.props.className);

        const extra: any = getProps(this.props);
        if(this.props.disabled) {
            extra.disabled = 'disabled';
        }
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
