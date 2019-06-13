import * as React from 'react';

interface SpinnerProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    type?: 'border' | 'grow';
}

export default class Spinner extends React.Component<SpinnerProps, any> {

    static defaultProps = {
        variant : 'primary',
        type : 'border'
    }

    render() {
        return <div className={'spinner-' + this.props.type + ' text-' + this.props.variant} role="status">
            <span className="sr-only">Loading...</span>
        </div>;
    }

}
