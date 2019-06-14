import * as React from 'react';

interface BadgeProps {
    /**
     * Custom CSS classes to be applied to the element
     */
    className?: string;

    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export default class Badge extends React.Component<BadgeProps, any> {

    static defaultProps = {
        variant: 'primary'
    }

    render() {
        return <span className={'badge badge-' + this.props.variant}>
            {this.props.children}
        </span>;
    }

}
