import React from 'react';
import { Indicator } from '../../../src';

export default function IndicatorDocs() {
    return (
        <div>
            <h1>Indicator</h1>
            <p>
                Renders a traffic light style indicator which can be used as a status in notification areas 
                or along with bulleted items to represent their status. The component displays a colored dot 
                followed by either a label or children content.
            </p>

            <h2>Usage</h2>
            
            <h3>Basic Usage with Label</h3>
            <p>Simple indicator with different variants and labels:</p>
            <div className='bedrock-docs-bar'>
                <Indicator variant='primary' label='Primary Status' />
                <Indicator variant='success' label='Online' />
                <Indicator variant='danger' label='Offline' />
                <Indicator variant='warning' label='Pending' />
                <Indicator variant='info' label='Processing' />
            </div>

            <h3>Usage with Children</h3>
            <p>Indicator using children instead of label prop:</p>
            <div className='bedrock-docs-bar'>
                <Indicator variant='success'>
                    User is currently active
                </Indicator>
                <Indicator variant='warning'>
                    <strong>Action required:</strong> Please update your profile
                </Indicator>
            </div>

            <h3>Status List Example</h3>
            <p>Practical example showing server statuses:</p>
            <div className='bedrock-docs-bar'>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Indicator variant='success' label='Database Server - Running' />
                    <Indicator variant='success' label='Web Server - Running' />
                    <Indicator variant='warning' label='Cache Server - High Memory Usage' />
                    <Indicator variant='danger' label='Mail Server - Down' />
                    <Indicator variant='info' label='Backup Server - Maintenance Mode' />
                </div>
            </div>

            <h3>Notification Style</h3>
            <p>Using indicators in a notification-like layout:</p>
            <div className='bedrock-docs-bar'>
                <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', padding: '12px' }}>
                    <Indicator variant='info' label='System Update Available' />
                </div>
                <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', padding: '12px' }}>
                    <Indicator variant='warning' label='Disk Space Running Low' />
                </div>
                <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', padding: '12px' }}>
                    <Indicator variant='danger' label='Security Alert: Unauthorized Access Attempt' />
                </div>
            </div>
        </div>
    );
} 