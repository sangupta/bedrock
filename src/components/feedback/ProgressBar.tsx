/**
 * bedrock - UI Component Library
 * https://github.com/sangupta/bedrock
 *
 * MIT License.
 * Copyright (c) 2022, Sandeep Gupta.
 *
 * Use of this source code is governed by a MIT style license
 * that can be found in LICENSE file in the code repository.
 */

import * as React from 'react';
import { buildCss } from '../../Utils';

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

export default class ProgressBar extends React.Component<ProgressBarProps> {

    static defaultProps = {
        variant: 'primary',
        min: 0,
        max: 100,
        value: 0,
        striped: false,
        animated: false,
        label: ''
    }

    render(): React.ReactNode {
        const { value: originalValue, min: originalMin, max: originalMax, label, variant, striped, animated,
            className, children, ...extraProps } = this.props;

        let value = originalValue || 0;
        let min = originalMin || 0;
        let max = originalMax || 0;

        let percent: number = ((value - min) * 100 / (max - min));
        if (percent < 0) {
            percent = 0;
        }

        const width = '' + percent.toFixed(0) + '%';
        const css: string = buildCss('progress', className);

        const barCSS: string = buildCss('progress-bar', 'bg-' + variant, {
            'progress-bar-striped': striped,
            'progress-bar-animated': animated
        });

        return <div {...extraProps} className={css}>
            <div className={barCSS}
                role="progressbar" style={{ width: width }}
                aria-valuenow={value}
                aria-valuemin={min}
                aria-valuemax={max}>{label}</div>
        </div>
    }

}
