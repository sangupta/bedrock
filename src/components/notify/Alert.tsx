import * as React from 'react';
import { Variant } from 'Bedrock';

interface AlertProps {
    className?: string;
    variant?: Variant;
    isOpen?: boolean;
}

export default class Alert extends React.Component<AlertProps, any> {

    static defaultProps = {
        isOpen: true
    }

    render() {
        if (!this.props.isOpen) {
            return null;
        }

        return <div className={'alert alert-' + this.props.variant} role="alert">
            {this.props.children}
        </div>;
    }

}
