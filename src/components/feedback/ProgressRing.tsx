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
import { BaseProps, Variant } from '../../types';
import { buildCss } from '../../Utils';

export interface ProgressRingProps extends BaseProps {
    variant?: Variant;

    /**
     * The progress percentage to display, represented as a whole
     * number between 0-100.
     */
    value: number;
}

/**
 * Displays a progress ring that is determinate. You may
 * use it to display the percentage completion of an activity
 * that needs time. If the percentage cannot be computed, and
 * an indeterminate ring is needed, use `<Spinner />` instead.
 * 
 * @author sangupta
 */
export default class ProgressRing extends React.Component<ProgressRingProps> {

    static defaultProps = {
        variant: 'primary'
    }

    render() {
        const { variant, className } = this.props;
        const css: string = buildCss('progress-spinner', 'progress-' + variant, className);
        return <div className={css}>

        </div>
    }

}
