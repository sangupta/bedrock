import React from 'react';
import { LoadingDots } from '../../../src';

export default function LoadingDotsDocs() {
    return <>
        <h1>LoadingDots</h1>
        <p>
            Displays animated dots that represent the loading status in a page. 
            This component provides a simple and elegant way to indicate that content 
            is being loaded or processed.
        </p>

        <h2>Usage</h2>

        <h3>Basic Loading Dots</h3>
        <p>Simple animated loading dots:</p>
        <div className='bedrock-docs-bar'>
            <LoadingDots />
        </div>

        <h3>Custom Styled Loading Dots</h3>
        <p>Loading dots with custom CSS classes:</p>
        <div className='bedrock-docs-bar'>
            <LoadingDots className="text-primary" />
        </div>
        <div className='bedrock-docs-bar'>
            <LoadingDots className="text-success" />
        </div>
        <div className='bedrock-docs-bar'>
            <LoadingDots className="text-warning" />
        </div>

        <h3>In Context Usage</h3>
        <p>Loading dots used in typical loading scenarios:</p>
        <div className='bedrock-docs-bar'>
            <div className="d-flex align-items-center">
                <span className="me-2">Loading content</span>
                <LoadingDots />
            </div>
        </div>
        <div className='bedrock-docs-bar'>
            <div className="text-center p-4">
                <h5>Please wait</h5>
                <LoadingDots />
                <p className="mt-2 text-muted">Processing your request...</p>
            </div>
        </div>

        <h2>Behavior</h2>
        <ul>
            <li>Displays three animated dots with bouncing animation</li>
            <li>Animation runs continuously until the component is unmounted</li>
            <li>Can be styled with additional CSS classes for color and sizing</li>
            <li>Lightweight and performant with CSS-based animations</li>
            <li>Suitable for indicating loading states in various UI contexts</li>
        </ul>
    </>
} 