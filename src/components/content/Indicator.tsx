import * as React from 'react';

interface IndicatorProps {
    label?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export default class Indicator extends React.Component<IndicatorProps, any> {

    static defaultProps = {
        label: '',
        variant: 'primary'
    }

    render() {
        return <div className={'indicator indicator-' + this.props.variant}>
            {this.props.label}
        </div>;
    }
}
