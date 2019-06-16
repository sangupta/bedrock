import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface BadgeButtonProps extends BaseProps {

    /**
     * Icon to display
     */
    icon?: string;

    /**
     * Text string to display
     */
    title?: string;

    /**
     * Method to call when the badge button is clicked
     */
    onClick?: React.MouseEventHandler<any>;

    /**
     * The value to display as the badge
     */
    badge?: string | number;

    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export default class BadgeButton extends React.Component<BadgeButtonProps, any> {

    static defaultProps = {
        variant: 'default'
    }

    getBadge = () => {
        if (!this.props.badge) {
            return null;
        }

        return <span className='badge badge-primary'>{this.props.badge}</span>;
    }

    render() {
        const css: string = mergeCSS('badge', 'bagde-' + this.props.variant, this.props.className);

        return <a href='#' className={css} onClick={this.props.onClick} >
            <i className={this.props.icon} /> {this.props.title}
            {this.getBadge()}
        </a>;
    }
}
