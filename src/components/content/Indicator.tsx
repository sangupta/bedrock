import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

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

    /**
     * Function handler called when someone clicks on the indicator
     */
    onClick?: (e: React.MouseEvent, eventID: string) => void;
}

/**
 * Used to show the current status of an operation.
 */
export default class Indicator extends React.Component<IndicatorProps, any> {

    static defaultProps = {
        label: '',
        variant: 'primary'
    }

    handleClick = (e: React.MouseEvent): void => {
        if (this.props.onClick) {
            this.props.onClick(e, this.props.eventID);
        }
    }

    render() {
        const children = this.props.children ? this.props.children : this.props.label;
        const extra: any = getProps(this.props);

        return <div {...extra} className={mergeCSS('indicator', this.props.className, { 'cursor-pointer': this.props.onClick ? true : false })} onClick={this.handleClick}>
            <span className={'indicator-dot bg-' + this.props.variant}></span>
            {children}
        </div>;
    }
}
