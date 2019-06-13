import * as React from 'react';
import { Variant } from 'Bedrock';

interface ProgressBarProps {
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
    variant?: Variant;

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
        const max = this.props.max || 100;
        const min = this.props.min || 0;
        const value = this.props.value || 0;
        const variant = this.props.variant || 'primary';

        let percent: number = ((value - min) * 100 / (max - min));
        if (percent < 0) {
            percent = 0;
        }
        const width = '' + percent.toFixed(0) + '%';

        return <div className='progress'>
            <div className={'progress-bar bg-' + variant} role="progressbar" style={{ width: width }} aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}></div>
        </div>;
    }

}
