import React from 'react';
import { TimeAgo } from '../../../src';

export default function TimeAgoDocs() {
    // Different timestamp examples for demonstration
    const now = Date.now();
    const secondsAgo = now - (30 * 1000); // 30 seconds ago
    const minutesAgo = now - (5 * 60 * 1000); // 5 minutes ago
    const hoursAgo = now - (3 * 60 * 60 * 1000); // 3 hours ago
    const daysAgo = now - (7 * 24 * 60 * 60 * 1000); // 7 days ago
    const monthsAgo = now - (45 * 24 * 60 * 60 * 1000); // ~45 days ago
    const yearsAgo = now - (400 * 24 * 60 * 60 * 1000); // ~400 days ago

    return (
        <div>
            <h1>TimeAgo</h1>
            <p>
                Computes the duration that has elapsed since the provided time and converts 
                it into a human readable string using the most relevant part. The component 
                automatically handles singular/plural language forms.
            </p>

            <h2>Usage</h2>
            
            <h3>Basic Time Ago Display</h3>
            <p>Display elapsed time using timestamps in milliseconds:</p>
            <div className='bedrock-docs-bar'>
                <TimeAgo millis={secondsAgo} />
                <TimeAgo millis={minutesAgo} />
                <TimeAgo millis={hoursAgo} />
            </div>

            <h3>Different Time Ranges</h3>
            <p>The component automatically selects the most appropriate time unit:</p>
            <div className='bedrock-docs-bar'>
                <TimeAgo millis={daysAgo} />
                <TimeAgo millis={monthsAgo} />
                <TimeAgo millis={yearsAgo} />
            </div>

            <h3>Edge Cases</h3>
            <p>Handling invalid or edge case values:</p>
            <div className='bedrock-docs-bar'>
                <span>Null value: </span>
                <TimeAgo millis={null as any} />
                <span>Negative value: </span>
                <TimeAgo millis={-1000} />
                <span>Zero value: </span>
                <TimeAgo millis={0} />
            </div>

            <h3>Recent Time Examples</h3>
            <p>Examples of very recent timestamps:</p>
            <div className='bedrock-docs-bar'>
                <TimeAgo millis={now - 1000} />
                <TimeAgo millis={now - 30000} />
                <TimeAgo millis={now - 120000} />
            </div>

            <h2>Behavior</h2>
            <ul>
                <li>Returns empty string for null, undefined, or negative values</li>
                <li>Accepts timestamp in milliseconds</li>
                <li>Automatically selects the most appropriate time unit (seconds, minutes, hours, days, months, years)</li>
                <li>Handles singular and plural forms correctly</li>
                <li>Renders as a span with 'format-time-ago' CSS class</li>
                <li>Includes a title attribute showing the same time ago text</li>
            </ul>

            <h2>Time Units</h2>
            <ul>
                <li><strong>moments ago</strong>: For very recent times</li>
                <li><strong>X minutes ago</strong>: For times within an hour</li>
                <li><strong>X hours ago</strong>: For times within a day</li>
                <li><strong>X days ago</strong>: For times within a month</li>
                <li><strong>X months ago</strong>: For times within a year</li>
                <li><strong>X years ago</strong>: For older times</li>
            </ul>

            <h2>Input Format</h2>
            <ul>
                <li><strong>millis</strong>: Timestamp in milliseconds (number)</li>
                <li>Must be a positive number representing a past timestamp</li>
                <li>Invalid values (null, undefined, negative) result in empty output</li>
            </ul>
        </div>
    );
} 