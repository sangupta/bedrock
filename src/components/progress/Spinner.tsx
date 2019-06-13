import * as React from 'react';

interface SpinnerProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    type?: 'border' | 'grow';
}

export default class Spinner extends React.Component<SpinnerProps, any> {

    render() {
        let variant = this.props.variant || 'primary';
        let type = this.props.type || 'border'
        return <div className={'spinner-' + type + ' text-' + variant} role="status">
            <span className="sr-only">Loading...</span>
        </div>;
    }

}
