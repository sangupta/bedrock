import React from 'react';
import { ColorBox } from '../../../src';

export default function ColorBoxDocs() {
    const handleColorClick = (color: string) => {
        alert(`Color clicked: ${color}`);
    };

    return (
        <div>
            <h1>ColorBox</h1>
            <p>
                A color box component that displays a single box filled with a given color. 
                It supports optional labels and click handlers.
            </p>

            <h2>Usage</h2>
            
            <h3>Basic Color Box</h3>
            <p>Simple color box without any label:</p>
            <div className='bedrock-docs-bar'>
                <ColorBox color='#0A61FE' />
            </div>

            <h3>Color Box with Label</h3>
            <p>Color box with a text label:</p>
            <div className='bedrock-docs-bar'>
                <ColorBox color='#5100EE' label='Primary Purple' />
            </div>

            <h3>Clickable Color Box</h3>
            <p>Color box with click handler:</p>
            <div className='bedrock-docs-bar'>
                <ColorBox 
                    color='#5B28B3' 
                    label='Click me!' 
                    onClick={handleColorClick} 
                />
            </div>

            <h3>Multiple Color Boxes</h3>
            <p>Showcasing various colors and combinations:</p>
            <div className='bedrock-docs-bar'>
                <ColorBox color='#FF6B6B' label='Red' onClick={handleColorClick} />
                <ColorBox color='#4ECDC4' label='Teal' onClick={handleColorClick} />
                <ColorBox color='#45B7D1' label='Blue' onClick={handleColorClick} />
                <ColorBox color='#96CEB4' label='Green' onClick={handleColorClick} />
                <ColorBox color='#FECA57' label='Yellow' onClick={handleColorClick} />
                <ColorBox color='#FF9FF3' label='Pink' onClick={handleColorClick} />
            </div>

            <h3>Color Palette Example</h3>
            <p>A practical example showing a color palette:</p>
            <div className='bedrock-docs-bar'>
                <ColorBox color='#1a1a1a' />
                <ColorBox color='#333333' />
                <ColorBox color='#666666' />
                <ColorBox color='#999999' />
                <ColorBox color='#cccccc' />
                <ColorBox color='#ffffff' />
            </div>
        </div>
    );
} 