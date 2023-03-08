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

import React from 'react';
import { BaseProps, Variant } from '../../types';
import { buildCss } from '../../Utils';

export interface CalloutProps extends BaseProps {
    variant?: Variant;
}

export default class Callout extends React.Component<CalloutProps> {

    static defaultProps = {
        variant: 'primary'
    }

    render() {
        const { className, children, variant } = this.props;
        const css = buildCss('callout', 'callout-' + variant, className);

        return <div className={css}>
            {children}
        </div>
    }

}
