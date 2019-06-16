import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface ProgressBarProps extends BaseProps {
    /**
     * The minimum value to use when computing percentage progress.
     */
    min?: number;

    /**
     * The maximum value to use when computing percentage progress.
     */
    max?: number;

    /**
     * Current value to display as progress
     */
    value?: number;

    /**
     * Label, if any, to display within the progress bar
     */
    label?: string;

    /**
     * Color styling variant for the component.
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    /**
     * Whether to display a striped progress bar.
     */
    striped?: boolean;

    /**
     * Whether to display an animated progress bar.
     */
    animated?: boolean;
}

export default class ProgressBar extends React.Component<ProgressBarProps, any> {

    static defaultProps = {
        variant: 'primary',
        min: 0,
        max: 100,
        value: 0,
        striped: false,
        animated: false
    }

    render() {
        let percent: number = ((this.props.value - this.props.min) * 100 / (this.props.max - this.props.min));
        if (percent < 0) {
            percent = 0;
        }
        
        const width = '' + percent.toFixed(0) + '%';
        const css: string = mergeCSS('progress', this.props.className);

        return <div className={css}>
            <div className={'progress-bar bg-' + this.props.variant}
                role="progressbar" style={{ width: width }}
                aria-valuenow={this.props.value}
                aria-valuemin={this.props.min}
                aria-valuemax={this.props.max}></div>
        </div>;
    }

}
