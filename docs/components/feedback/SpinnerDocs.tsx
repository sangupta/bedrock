import React from 'react';
import { Spinner } from '../../../src';

export default function SpinnerDocs() {
    return <>
        <h1>Spinner</h1>
        <p>
            Spinners can be used to show the loading state in your projects. 
            They provide a visual indication that content is being loaded or 
            processed, helping users understand that the application is working.
        </p>

        <h2>Usage</h2>

        <h3>Basic Spinner</h3>
        <p>A simple spinner with default styling:</p>
        <div className='bedrock-docs-bar'>
            <Spinner />
        </div>

        <h3>Different Variants</h3>
        <p>Spinners with different color variants:</p>
        <div className='bedrock-docs-bar'>
            <Spinner variant="primary" />
        </div>
        <div className='bedrock-docs-bar'>
            <Spinner variant="secondary" />
        </div>
        <div className='bedrock-docs-bar'>
            <Spinner variant="success" />
        </div>
        <div className='bedrock-docs-bar'>
            <Spinner variant="danger" />
        </div>
        <div className='bedrock-docs-bar'>
            <Spinner variant="warning" />
        </div>
        <div className='bedrock-docs-bar'>
            <Spinner variant="info" />
        </div>
        <div className='bedrock-docs-bar'>
            <Spinner variant="light" />
        </div>
        <div className='bedrock-docs-bar' style={{backgroundColor: '#333', padding: '1rem'}}>
            <Spinner variant="light" />
        </div>
        <div className='bedrock-docs-bar'>
            <Spinner variant="dark" />
        </div>

        <h3>With Aria Labels</h3>
        <p>Spinners with accessibility labels for screen readers:</p>
        <div className='bedrock-docs-bar'>
            <Spinner ariaLabel="Loading content..." />
        </div>
        <div className='bedrock-docs-bar'>
            <Spinner variant="success" ariaLabel="Processing request..." />
        </div>
        <div className='bedrock-docs-bar'>
            <Spinner variant="warning" ariaLabel="Uploading file..." />
        </div>

        <h3>In Context Usage</h3>
        <p>Spinners used in typical loading scenarios:</p>
        <div className='bedrock-docs-bar'>
            <div className="d-flex align-items-center">
                <Spinner variant="primary" />
                <span className="ms-2">Loading...</span>
            </div>
        </div>
        <div className='bedrock-docs-bar'>
            <div className="text-center p-4">
                <Spinner variant="success" ariaLabel="Saving changes..." />
                <p className="mt-2 mb-0">Saving your changes...</p>
            </div>
        </div>
        <div className='bedrock-docs-bar'>
            <button className="btn btn-primary" disabled>
                <Spinner variant="light" ariaLabel="Processing..." />
                <span className="ms-2">Processing...</span>
            </button>
        </div>

        <h3>Different Sizes</h3>
        <p>Spinners can be sized using Bootstrap utility classes:</p>
        <div className='bedrock-docs-bar d-flex align-items-center gap-3'>
            <div className="spinner-border spinner-border-sm text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <Spinner variant="primary" />
            <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

        <h3>Loading States</h3>
        <p>Common patterns for showing loading states:</p>
        <div className='bedrock-docs-bar'>
            <div className="card">
                <div className="card-body text-center">
                    <Spinner variant="primary" ariaLabel="Loading data..." />
                    <h5 className="card-title mt-3">Loading Data</h5>
                    <p className="card-text text-muted">Please wait while we fetch your information...</p>
                </div>
            </div>
        </div>
        <div className='bedrock-docs-bar'>
            <div className="d-flex justify-content-between align-items-center p-3 border rounded">
                <div>
                    <h6 className="mb-1">Uploading document.pdf</h6>
                    <small className="text-muted">Please don't close this window</small>
                </div>
                <Spinner variant="success" ariaLabel="Uploading file..." />
            </div>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Spinners continuously animate with a spinning motion</li>
            <li>Default variant is 'primary' with blue coloring</li>
            <li>Color can be customized using the variant prop with Bootstrap color names</li>
            <li>Screen readers announce the loading state when ariaLabel is provided</li>
            <li>Spinners have the 'status' ARIA role for accessibility</li>
            <li>Size can be modified using Bootstrap utility classes or custom CSS</li>
            <li>Works well in buttons, cards, and other UI contexts to indicate loading states</li>
            <li>Should be used temporarily and removed when loading is complete</li>
        </ul>
    </>
} 