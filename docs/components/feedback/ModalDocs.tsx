import React from 'react';
import { Modal } from '../../../src';

export default function ModalDocs() {
    const [showBasicModal, setShowBasicModal] = React.useState(false);
    const [showCenteredModal, setShowCenteredModal] = React.useState(false);
    const [showNoBackdropModal, setShowNoBackdropModal] = React.useState(false);

    return <>
        <h1>Modal</h1>
        <p>
            A modal dialog component that displays content in a dialog overlay. 
            Modals are used to focus user attention on important content or actions 
            without navigating away from the current page.
        </p>

        <h2>Usage</h2>

        <h3>Basic Modal</h3>
        <p>A standard modal with top alignment and backdrop:</p>
        <div className='bedrock-docs-bar'>
            <button className="btn btn-primary" onClick={() => setShowBasicModal(true)}>
                Open Basic Modal
            </button>
            {showBasicModal && (
                <Modal>
                    <div className="modal-header">
                        <h5 className="modal-title">Modal Title</h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            onClick={() => setShowBasicModal(false)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>This is a basic modal with standard content. You can place any content here including forms, images, or other components.</p>
                        <p>The modal includes a backdrop and is aligned to the top of the viewport by default.</p>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            onClick={() => setShowBasicModal(false)}
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save Changes
                        </button>
                    </div>
                </Modal>
            )}
        </div>

        <h3>Centered Modal</h3>
        <p>A modal with center alignment:</p>
        <div className='bedrock-docs-bar'>
            <button className="btn btn-success" onClick={() => setShowCenteredModal(true)}>
                Open Centered Modal
            </button>
            {showCenteredModal && (
                <Modal align="center">
                    <div className="modal-header">
                        <h5 className="modal-title">Centered Modal</h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            onClick={() => setShowCenteredModal(false)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>This modal is vertically centered in the viewport.</p>
                        <p>Center alignment is useful when you want to draw maximum attention to the modal content.</p>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            onClick={() => setShowCenteredModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            )}
        </div>

        <h3>Modal without Backdrop</h3>
        <p>A modal without the dark backdrop overlay:</p>
        <div className='bedrock-docs-bar'>
            <button className="btn btn-warning" onClick={() => setShowNoBackdropModal(true)}>
                Open Modal without Backdrop
            </button>
            {showNoBackdropModal && (
                <Modal backdrop={false}>
                    <div className="modal-header">
                        <h5 className="modal-title">No Backdrop</h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            onClick={() => setShowNoBackdropModal(false)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>This modal appears without a backdrop overlay.</p>
                        <p>Users can still interact with the background content when backdrop is disabled.</p>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            onClick={() => setShowNoBackdropModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            )}
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Modals display as overlays on top of the main content</li>
            <li>By default, modals include a dark backdrop that covers the underlying content</li>
            <li>Modals can be aligned to the top of the viewport (default) or centered vertically</li>
            <li>The backdrop can be disabled to allow interaction with background content</li>
            <li>Modals have proper ARIA roles for accessibility (dialog, document)</li>
            <li>Content is structured with modal-header, modal-body, and modal-footer sections</li>
            <li>Modals should be conditionally rendered based on state for proper show/hide behavior</li>
        </ul>
    </>
} 