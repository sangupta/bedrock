import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface IndicatorProps extends BaseProps {
    /**
     * Text label to be displayed along side the indicator.
     * For rich label use as component children
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
        const children = this.props.children ? this.props.children : this.props.label;

        return <div className={mergeCSS('indicator', this.props.className)}>
            <span className={'indicator-dot bg-' + this.props.variant}></span>
            {children}
        </div>;
    }
}
