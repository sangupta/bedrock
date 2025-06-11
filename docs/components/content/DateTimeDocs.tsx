import React from 'react';
import { DateTime } from '../../../src';

export default function DateTimeDocs() {
    // Current timestamp for examples
    const currentTime = Date.now();
    const pastTime = currentTime - (24 * 60 * 60 * 1000); // 24 hours ago
    const futureTime = currentTime + (7 * 24 * 60 * 60 * 1000); // 7 days from now
    const secondsTimestamp = Math.floor(currentTime / 1000); // Current time in seconds

    return (
        <div>
            <h1>DateTime</h1>
            <p>
                A component for formatting and displaying date and time values. It supports 
                multiple format types and can handle both millisecond and second timestamps.
            </p>

            <h2>Usage</h2>
            
            <h3>Date Formatting</h3>
            <p>Display only the date portion:</p>
            <div className='bedrock-docs-bar'>
                <DateTime value={currentTime} type="date" />
                <DateTime value={pastTime} type="date" />
                <DateTime value={futureTime} type="date" />
            </div>

            <h3>Time Formatting</h3>
            <p>Display only the time portion:</p>
            <div className='bedrock-docs-bar'>
                <DateTime value={currentTime} type="time" />
                <DateTime value={pastTime} type="time" />
                <DateTime value={futureTime} type="time" />
            </div>

            <h3>Date-Time Formatting</h3>
            <p>Display both date and time:</p>
            <div className='bedrock-docs-bar'>
                <DateTime value={currentTime} type="date-time" />
                <DateTime value={pastTime} type="date-time" />
                <DateTime value={futureTime} type="date-time" />
            </div>

            <h3>Seconds Timestamp</h3>
            <p>When your timestamp is in seconds rather than milliseconds:</p>
            <div className='bedrock-docs-bar'>
                <DateTime value={secondsTimestamp} valueType="seconds" type="date-time" />
                <DateTime value={secondsTimestamp} valueType="seconds" type="date" />
                <DateTime value={secondsTimestamp} valueType="seconds" type="time" />
            </div>

            <h3>Edge Cases</h3>
            <p>Handling invalid or edge case values:</p>
            <div className='bedrock-docs-bar'>
                <span>Null value: </span><DateTime value={null as any} type="date-time" />
                <span>Negative value: </span><DateTime value={-1} type="date-time" />
                <span>Zero value: </span><DateTime value={0} type="date-time" />
            </div>

            <h3>Historical Dates</h3>
            <p>Displaying various historical timestamps:</p>
            <div className='bedrock-docs-bar'>
                <DateTime value={new Date('2020-01-01').getTime()} type="date" />
                <DateTime value={new Date('2021-06-15 14:30:00').getTime()} type="date-time" />
                <DateTime value={new Date('2019-12-31 23:59:59').getTime()} type="time" />
            </div>

            <h2>Behavior</h2>
            <ul>
                <li>Returns empty string for null, undefined, or negative values</li>
                <li>Converts seconds to milliseconds when valueType is "seconds"</li>
                <li>Displays formatted value with a title attribute showing the same value</li>
                <li>Uses browser's default locale for formatting</li>
                <li>Renders as a span element with 'format-date-time' CSS class</li>
            </ul>

            <h2>Format Types</h2>
            <ul>
                <li><strong>date</strong>: Shows only the date (MM/DD/YYYY format)</li>
                <li><strong>time</strong>: Shows only the time (HH:MM:SS AM/PM format)</li>
                <li><strong>date-time</strong>: Shows both date and time</li>
            </ul>

            <h2>Value Types</h2>
            <ul>
                <li><strong>Default (milliseconds)</strong>: Standard JavaScript timestamp</li>
                <li><strong>seconds</strong>: Unix timestamp in seconds (automatically converted to milliseconds)</li>
            </ul>
        </div>
    );
} 