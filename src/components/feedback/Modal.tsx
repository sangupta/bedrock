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

import React from 'react';
import { buildCss } from '../../Utils';
import Underlay from './../layout/Underlay';

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
