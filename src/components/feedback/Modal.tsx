import React from 'react';
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

    render() {
        const css = this.props.align === 'top' ? 'modal-align-top' : 'flex-center';
        return <>
            <Underlay show={this.props.backdrop} />
            <div className='modal fade show d-block' role='dialog'>
                <div className={'d-flex  modal-dialog ' + css} role='document'>
                    <div className='modal-content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        </>
    }
}
