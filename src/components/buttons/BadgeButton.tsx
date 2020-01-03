import * as React from 'react';
import { BaseProps, NoProps, mergeCSS, getProps } from './../../BedrockUtils';

interface BadgeButtonProps extends BaseProps {

    /**
     * Icon to display
     */
    icon?: string;

    /**
     * Text string to display
     */
    label?: string;

    /**
     * Method to call when the badge button is clicked
     */
    onClick?: (e: React.MouseEvent, eventID: string) => void;

    /**
     * The value to display as the badge
     */
    badge?: string | number;

    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

/**
 * Simple badge-style button. `BadgeButton` supports providing 
 * text before badge, both as a `label` `prop` or as `children`
 * to the component. Preference is given to `children`
 * over the `prop`.
 * 
 */
export default class BadgeButton extends React.Component<BadgeButtonProps, NoProps> {

    static defaultProps = {
        variant: 'default'
    }

    handleClick = (e:React.MouseEvent):void => {
        e.preventDefault();
        // e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
        if(this.props.onClick) {
            this.props.onClick(e, this.props.eventID);
        }
    }

    getBadge = () => {
        if (!this.props.badge) {
            return null;
        }

        return <span className='badge badge-primary'>{this.props.badge}</span>;
    }

    render() {
        const css: string = mergeCSS('badge', 'bagde-' + this.props.variant, this.props.className);
        const extra: any = getProps(this.props);
        const children = this.props.children ? this.props.children : this.props.label;

        return <a {...extra} href='#' className={css} onClick={this.handleClick} >
            <i className={this.props.icon} /> {children}&nbsp;
            {this.getBadge()}
        </a>;
    }
}
