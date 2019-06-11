import * as React from 'react';

interface BadgeButtonProps {
    
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
     * Extra CSS classes that can be added to the parent DIV
     */
    className?: string;

    /**
     * Type of badge that needs to be rendered
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export default class BadgeButton extends React.Component<BadgeButtonProps, any> {

    getBadge = () => {
        if(!this.props.badge) {
            return null;
        }
        
        return <span className='badge badge-primary'>{this.props.badge}</span>;
    }

    render() {
        let variant = this.props.variant || 'default';
        variant = 'badge badge-' + variant;

        return <a href='#' className={this.props.className} onClick={this.props.onClick} >
            <i className={this.props.icon} /> {this.props.title}
            { this.getBadge() }
        </a>;
    }
}
