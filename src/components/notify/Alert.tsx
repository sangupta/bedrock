import * as React from 'react';

interface AlertProps {
    className?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export default class Alert extends React.Component<AlertProps, any> {
    
    render() {
        return <div className={ 'alert alert-' + this.props.variant } role="alert">
            {this.props.children}
        </div>;
    }

}
