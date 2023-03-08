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
import { BaseProps } from '../../types';
import { buildCss } from '../../Utils';

export interface UnderlayProps extends BaseProps {
    /**
     * Whether to display the underlay or not
     */
    show?: boolean;
}

export default class Underlay extends React.PureComponent<UnderlayProps> {

    static defaultProps = {
        show: true
    }

    render(): React.ReactNode {
        const { className, children, show, ...extraProps } = this.props;
        if (!this.props.show) {
            return null;
        }

        const css = buildCss('modal-underlay', className);
        return <div className={css} {...extraProps}>
            {this.props.children}
        </div>
    }

}
