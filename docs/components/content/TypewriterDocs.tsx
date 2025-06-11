import React from 'react';
import { Typewriter } from '../../../src';

export default function TypewriterDocs() {
    return (
        <div>
            <h1>Typewriter</h1>
            <p>
                A typewriter component that mimics displaying text one character at a time.
                In erase mode, it removes one character from the string at a time. The time
                gap between each addition/removal of character is configurable.
            </p>

            <h2>Usage</h2>
            
            <h3>Basic Typewriter</h3>
            <p>Display text with default settings (1 second per character):</p>
            <div className='bedrock-docs-bar'>
                <Typewriter message="Hello, World!" />
            </div>

            <h3>Fast Typing</h3>
            <p>Display text with faster typing speed (100ms per character):</p>
            <div className='bedrock-docs-bar'>
                <Typewriter message="This types quickly!" timeInMillis={100} />
            </div>

            <h3>Slow Typing</h3>
            <p>Display text with slower typing speed (2 seconds per character):</p>
            <div className='bedrock-docs-bar'>
                <Typewriter message="S l o w   t y p i n g..." timeInMillis={2000} />
            </div>

            <h3>Erase Mode</h3>
            <p>Remove text one character at a time:</p>
            <div className='bedrock-docs-bar'>
                <Typewriter message="This text will disappear!" eraseMode={true} timeInMillis={200} />
            </div>

            <h3>Long Text Example</h3>
            <p>Typewriter effect with longer text:</p>
            <div className='bedrock-docs-bar'>
                <Typewriter 
                    message="The quick brown fox jumps over the lazy dog. This is a longer sentence to demonstrate the typewriter effect with more content." 
                    timeInMillis={50} 
                />
            </div>

            <h3>Code Example</h3>
            <p>Typewriter effect with code-like content:</p>
            <div className='bedrock-docs-bar' style={{ fontFamily: 'monospace' }}>
                <Typewriter 
                    message="function hello() { console.log('Hello, World!'); }" 
                    timeInMillis={80} 
                />
            </div>

            <h2>Behavior</h2>
            <ul>
                <li>In normal mode, characters are added one by one until the complete message is displayed</li>
                <li>In erase mode, characters are removed one by one from the end until the message is empty</li>
                <li>Timer automatically stops when the animation is complete</li>
                <li>Component properly cleans up timers when unmounting to prevent memory leaks</li>
                <li>Uses PureComponent for optimized re-rendering</li>
            </ul>
        </div>
    );
} 