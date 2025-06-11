import React from 'react';
import { Countdown } from '../../../src';

export default function CountdownDocs() {
    return (
        <div>
            <h1>Countdown</h1>
            <p>
                A countdown component that allows stepping between a start and end value 
                (either increasing or decreasing) at a given interval. The component 
                automatically updates the displayed value and stops when reaching the target.
            </p>

            <h2>Usage</h2>
            
            <h3>Basic Countdown (Increasing)</h3>
            <p>Count up from 0 to 10 with default settings:</p>
            <div className='bedrock-docs-bar'>
                <Countdown start={0} stop={10} />
            </div>

            <h3>Countdown (Decreasing)</h3>
            <p>Count down from 10 to 0:</p>
            <div className='bedrock-docs-bar'>
                <Countdown start={10} stop={0} step={-1} />
            </div>

            <h3>Fast Countdown</h3>
            <p>Count up from 0 to 20 with faster interval (100ms):</p>
            <div className='bedrock-docs-bar'>
                <Countdown start={0} stop={20} timeInMillis={100} />
            </div>

            <h3>Custom Step Size</h3>
            <p>Count up by 5s from 0 to 50:</p>
            <div className='bedrock-docs-bar'>
                <Countdown start={0} stop={50} step={5} />
            </div>

            <h3>Slow Timer</h3>
            <p>Count down from 20 to 0 with 2-second intervals:</p>
            <div className='bedrock-docs-bar'>
                <Countdown start={20} stop={0} step={-1} timeInMillis={2000} />
            </div>

            <h3>Large Number Countdown</h3>
            <p>Count up from 100 to 1000 by 100s with fast updates:</p>
            <div className='bedrock-docs-bar'>
                <Countdown start={100} stop={1000} step={100} timeInMillis={200} />
            </div>

            <h2>Behavior</h2>
            <ul>
                <li>For positive step values, counting stops when value exceeds stop</li>
                <li>For negative step values, counting stops when value goes below stop</li>
                <li>Timer automatically cleans up when component unmounts</li>
                <li>Component re-renders only the current value for performance</li>
            </ul>
        </div>
    );
} 