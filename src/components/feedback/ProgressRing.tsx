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
}

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
