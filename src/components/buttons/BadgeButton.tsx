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
     * Button styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    /**
     * Badge styling to be applied
     */
    badgeVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
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
        variant: 'primary',
        badgeVariant: 'secondary'
    }

    handleClick = (e: React.MouseEvent): void => {
        e.preventDefault();
        if (this.props.onClick) {
            this.props.onClick(e, this.props.eventID);
        }
    }

    getBadge = () => {
        if (!this.props.badge) {
            return null;
        }

        return <span className={'badge bg-' + this.props.badgeVariant}>{this.props.badge}</span>;
    }

    getIcon = () => {
        if (!this.props.icon) {
            return null;
        }

        return <i className={this.props.icon} />;
    }

    render() {
        const css: string = mergeCSS('btn', 'btn-' + this.props.variant, this.props.className);
        const extra: any = getProps(this.props);
        const children = this.props.children ? this.props.children : this.props.label;

        return <button type='button' {...extra} className={css} onClick={this.handleClick} >
            {this.getIcon()}
            {children}&nbsp;
            {this.getBadge()}
        </button>;
    }
}
