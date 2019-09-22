import * as React from 'react';
import { BaseProps, NoProps } from '../../BedrockUtils';
import Underlay from './../misc/Underlay';

interface ModalProps extends BaseProps {
    /**
     * Whether to display the modal or not
     */
    open?: boolean;

    /**
     * Whether to show the backdrop or not
     */
    backdrop?: boolean;

    /**
     * Whether to allow scroll on background document
     */
    allowScroll?: boolean;
}

export default class ModalContainer extends React.Component<ModalProps, NoProps> {

    static defaultProps = {
        open: false,
        backdrop: true,
        allowScroll: false
    }

    render() {
        if (!this.props.open) {
            if (!this.props.allowScroll) {
                document.body.classList.remove('modal-open');
            }
            return null;
        }

        // prevent document scroll
        if (!this.props.allowScroll) {
            document.body.classList.add('modal-open');
        }

        // return the modal
        return <React.Fragment>
            <Underlay show={this.props.backdrop} />

            <div className='modal fade show d-block' role='dialog'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        </React.Fragment>;
    }

}
