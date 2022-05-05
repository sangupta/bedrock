import React from 'react'

interface SpinnerProps {
    ariaLabel?: string;
    variant?: Variant;
}

export default class Spinner extends React.Component<SpinnerProps> {

    static defaultProps = {
        variant: 'primary'
    }

    render() {
        return <div className={"spinner-border text-" + this.props.variant} role="status">
            {this.props.ariaLabel ? <span className="visually-hidden">{this.props.ariaLabel}</span> : null}
        </div>
    }
}
