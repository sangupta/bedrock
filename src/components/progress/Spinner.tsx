import * as React from 'react';

interface SpinnerProps {
    /**
     * Custom CSS classes to be applied to the element
     */
    className?: string;

    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    /**
     * Type of spinner to display
     */
    type?: 'border' | 'grow';
}

export default class Spinner extends React.PureComponent<SpinnerProps, any> {

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
