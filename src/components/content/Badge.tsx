import * as React from 'react';

interface BadgeProps {
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
