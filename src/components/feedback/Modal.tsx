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
import { BaseProps } from '../../types';
import { buildCss } from '../../Utils';
import Underlay from './../layout/Underlay';

export type ModalVerticalAlignment = 'top' | 'center';

interface ModalProps extends BaseProps {
    /**
     * Whether to show the backdrop or not
     */
    backdrop?: boolean;

    align?: ModalVerticalAlignment;
}

export default class Modal extends React.Component<ModalProps> {

    static defaultProps = {
        backdrop: true,
        align: 'top'
    }

    render(): React.ReactNode {
        const css = this.props.align === 'top' ? 'modal-align-top' : 'flex-center';

        return <>
            <Underlay show={this.props.backdrop} />
            <div className={buildCss('modal fade show d-block', this.props.className)} role='dialog'>
                <div className={'d-flex  modal-dialog ' + css} role='document'>
                    <div className='modal-content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        </>
    }
}
