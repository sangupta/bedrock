import React from 'react';
import { ByteSize } from '../../../src';

export default function ByteSizeDocs() {
    return <div>
        <h1>ByteSize</h1>
        <p>A component that displays a byte size in a readable format.</p>

        <h2>Usage</h2>
        
        <ul>
            <li><ByteSize bytes={-1} /></li>
            <li><ByteSize bytes={0} /></li>
            <li><ByteSize bytes={1023} /></li>
            <li><ByteSize bytes={1023 * 1024} /></li>
            <li><ByteSize bytes={1023 * 1024 * 1024} /></li>
            <li><ByteSize bytes={1023 * 1024 * 1024 * 1024} /></li>
            <li><ByteSize bytes={1023 * 1024 * 1024 * 1024 * 1024} /></li>
            <li><ByteSize bytes={1023 * 1024 * 1024 * 1024 * 1024 * 1024} /></li>
            <li><ByteSize bytes={1023 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024} /></li>
        </ul>
    </div>
}
