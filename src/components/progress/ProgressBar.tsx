import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps, Variant } from './../../BedrockUtils';

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

export default class ProgressBar extends React.Component<ProgressBarProps, NoProps> {

    static defaultProps = {
        variant: 'primary',
        min: 0,
        max: 100,
        value: 0,
        striped: false,
        animated: false
    }

    render() {
        let { value, min, max } = this.props;

        value = value || 0;
        min = min || 0;
        max = max || 0;

        let percent: number = ((value - min) * 100 / (max - min));
        if (percent < 0) {
            percent = 0;
        }

        const width = '' + percent.toFixed(0) + '%';
        const css: string = mergeCSS('progress', this.props.className);
        const extra: any = getProps(this.props);

        return <div {...extra} className={css}>
            <div className={'progress-bar bg-' + this.props.variant}
                role="progressbar" style={{ width: width }}
                aria-valuenow={this.props.value}
                aria-valuemin={this.props.min}
                aria-valuemax={this.props.max}></div>
        </div>;
    }

}
