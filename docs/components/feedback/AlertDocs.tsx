import React from 'react';
import { Alert } from '../../../src';

export default function AlertDocs() {
    const [showAlert, setShowAlert] = React.useState(true);

    return <>
        <h1>Alert</h1>
        <p>
            An alert or informational component, also called as MessageBar. 
            They are used to provide contextual feedback messages for typical 
            user actions with the handful of available and flexible alert messages.
        </p>

        <h2>Usage</h2>

        <h3>Basic Alerts</h3>
        <p>Basic alert examples with different variants:</p>
        <div className='bedrock-docs-bar'>
            <Alert variant="primary">
                A simple primary alert—check it out!
            </Alert>
        </div>
        <div className='bedrock-docs-bar'>
            <Alert variant="secondary">
                A simple secondary alert—check it out!
            </Alert>
        </div>
        <div className='bedrock-docs-bar'>
            <Alert variant="success">
                A simple success alert—check it out!
            </Alert>
        </div>
        <div className='bedrock-docs-bar'>
            <Alert variant="danger">
                A simple danger alert—check it out!
            </Alert>
        </div>
        <div className='bedrock-docs-bar'>
            <Alert variant="warning">
                A simple warning alert—check it out!
            </Alert>
        </div>
        <div className='bedrock-docs-bar'>
            <Alert variant="info">
                A simple info alert—check it out!
            </Alert>
        </div>
        <div className='bedrock-docs-bar'>
            <Alert variant="light">
                A simple light alert—check it out!
            </Alert>
        </div>
        <div className='bedrock-docs-bar'>
            <Alert variant="dark">
                A simple dark alert—check it out!
            </Alert>
        </div>

        <h3>Dismissible Alerts</h3>
        <p>Alerts with close button that can be dismissed:</p>
        <div className='bedrock-docs-bar'>
            <Alert variant="success" allowClose>
                <strong>Well done!</strong> You successfully read this important alert message.
            </Alert>
        </div>
        <div className='bedrock-docs-bar'>
            <Alert variant="info" allowClose>
                <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </Alert>
        </div>

        <h3>Controlled Alert</h3>
        <p>Alert controlled by external state:</p>
        <div className='bedrock-docs-bar'>
            <button 
                className="btn btn-primary mb-2" 
                onClick={() => setShowAlert(!showAlert)}
            >
                {showAlert ? 'Hide Alert' : 'Show Alert'}
            </button>
            <Alert variant="warning" show={showAlert} allowClose onClose={() => setShowAlert(false)}>
                This alert can be controlled externally!
            </Alert>
        </div>

        <h3>Rich Content</h3>
        <p>Alerts can contain various HTML elements:</p>
        <div className='bedrock-docs-bar'>
            <Alert variant="success">
                <h4 className="alert-heading">Well done!</h4>
                <p>
                    Aww yeah, you successfully read this important alert message. 
                    This example text is going to run a bit longer so that you can see 
                    how spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                </p>
            </Alert>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Alerts are displayed by default unless `show` prop is set to `false`</li>
            <li>When `allowClose` is true, a close button is rendered that sets internal state to hide the alert</li>
            <li>The `onClose` callback is called when the close button is clicked</li>
            <li>The `show` prop can be used to control the alert visibility externally</li>
            <li>Different variants provide different color schemes following Bootstrap conventions</li>
            <li>Alerts have the `alert` role by default for accessibility</li>
        </ul>
    </>
} 