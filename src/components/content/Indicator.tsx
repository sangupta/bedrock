import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface IndicatorProps extends BaseProps {
    /**
     * Text label to be displayed along side the indicator
     */
    label?: string;

    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

/**
 * Used to show the current status of an operation.
 */
export default class Indicator extends React.Component<IndicatorProps, any> {

    static defaultProps = {
        label: '',
        variant: 'primary'
    }

    render() {
        return <div className='indicator'>
            <span className={'indicator-dot bg-' + this.props.variant}></span>
            {this.props.label}
        </div>;
    }
}
