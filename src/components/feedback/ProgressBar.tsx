/**
 *
 * bedrock - UI Component Library
 * Copyright (c) 2020, Sandeep Gupta
 *
 * https://bedrock.sangupta.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 		http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
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
