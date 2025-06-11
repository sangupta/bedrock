import React from 'react';
import { Time } from '../../../src';

export default function TimeDocs() {
    // Current timestamp for examples
    const currentTime = Date.now();
    const pastTime = currentTime - (3 * 60 * 60 * 1000); // 3 hours ago
    const futureTime = currentTime + (5 * 60 * 60 * 1000); // 5 hours from now
    const currentDate = new Date();

    return (
        <div>
            <h1>Time</h1>
            <p>
                A component for displaying time in a clock format. It shows the time 
                without seconds and supports timezone-specific formatting.
            </p>

            <h2>Usage</h2>
            
            <h3>Basic Time Display</h3>
            <p>Display time using a Date object or timestamp:</p>
            <div className='bedrock-docs-bar'>
                <Time time={currentDate} />
                <Time time={currentTime} />
                <Time time={pastTime} />
                <Time time={futureTime} />
            </div>

            <h3>With Named Clocks</h3>
            <p>Display multiple time clocks with names:</p>
            <div className='bedrock-docs-bar'>
                <Time time={currentTime} name="Local" />
                <Time time={currentTime} name="Office" />
                <Time time={currentTime} name="Server" />
            </div>

            <h3>Timezone Support</h3>
            <p>Display time in different timezones:</p>
            <div className='bedrock-docs-bar'>
                <Time time={currentTime} name="New York" timeZone="America/New_York" />
                <Time time={currentTime} name="London" timeZone="Europe/London" />
                <Time time={currentTime} name="Tokyo" timeZone="Asia/Tokyo" />
                <Time time={currentTime} name="Los Angeles" timeZone="America/Los_Angeles" />
            </div>

            <h3>Edge Cases</h3>
            <p>Handling invalid or edge case values:</p>
            <div className='bedrock-docs-bar'>
                <span>Null time: </span>
                <Time time={null as any} name="Invalid" />
                <span>Zero timestamp: </span>
                <Time time={0} name="Epoch" />
            </div>

            <h3>Different Time Formats</h3>
            <p>Using various time inputs:</p>
            <div className='bedrock-docs-bar'>
                <Time time={new Date('2024-01-15 09:30:45')} name="Morning" />
                <Time time={new Date('2024-01-15 14:15:30')} name="Afternoon" />
                <Time time={new Date('2024-01-15 21:45:15')} name="Evening" />
            </div>

            <h2>Behavior</h2>
            <ul>
                <li>Returns null for null, undefined, or falsy time values</li>
                <li>Accepts both Date objects and numeric timestamps</li>
                <li>Displays time in HH:MM AM/PM format (without seconds)</li>
                <li>Uses system locale for time formatting</li>
                <li>Renders as a div with 'clock' CSS class</li>
                <li>Clock name is displayed in a span with 'clock-name' class</li>
                <li>Clock time is displayed in a span with 'clock-time' class</li>
            </ul>

            <h2>Input Types</h2>
            <ul>
                <li><strong>Date object</strong>: Standard JavaScript Date instance</li>
                <li><strong>number</strong>: Timestamp in milliseconds</li>
            </ul>

            <h2>Timezone Handling</h2>
            <ul>
                <li><strong>Default</strong>: Uses system local timezone</li>
                <li><strong>With timeZone prop</strong>: Converts to specified timezone using IANA timezone identifiers</li>
            </ul>
        </div>
    );
} 