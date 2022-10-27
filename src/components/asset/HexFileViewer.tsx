/**
 * bedrock - UI Component Library
 * https://github.com/sangupta/bedrock
 *
 * MIT License.
 * Copyright (c) 2022, Sandeep Gupta.
 *
 * Use of this source code is governed by a MIT style license
 * that can be found in LICENSE file in the code repository.
 */

import React from 'react';
import { asChar } from '../../Utils';

/**
 * Props for HexViewer component.
 */
interface HexFileViewerProps {
    bytes: Uint8Array;
}

/**
 * A simple HEX viewer used to view files/data in hex. It renders
 * the 16 columns in each row in a group of 4 and lays out the
 * content in them. The rows are numbered in hex to mimic the CLI
 * style. Use this with a monospace font to prevent UI layout issues.
 * 
 */
export default class HexFileViewer extends React.Component<HexFileViewerProps> {

    render(): React.ReactNode {
        const { bytes } = this.props;
        if (!bytes) {
            return null;
        }

        const rows: any[] = [];
        for (let index = 0; index < bytes.length; index += 16) {
            rows.push(<HexRow key={'offset-' + index} array={bytes.subarray(index, index + 16)} offset={index} />);
        }

        return <div className='hex-viewer'>
            {rows}
        </div>
    }

}

/**
 * Props for HexRow component.
 */
interface HexRowProps {
    array: Uint8Array;
    offset: number;
}

/**
 * Renders one single row of hex. Each row consists of 16 bytes
 * where each 4 bytes are blocked together and each block is
 * spaced extra to allow for better visual appeal.
 * 
 */
class HexRow extends React.Component<HexRowProps> {

    render(): React.ReactNode {
        const { array, offset } = this.props;

        const offHex = offset.toString(16).padStart(8, '0');

        let result = '';
        let chars = '';
        for (let index = 0; index < array.length; index++) {
            const byte = array[index];
            const byteString = byte.toString(16).padStart(2, '0');
            const chr = asChar(byte);

            result += byteString + ' ';
            chars += chr + ' ';

            if (index > 0 && index % 4 === 0) {
                result += '  ';
                chars += ' ';
            }
        }

        return <pre>{offHex} | {result.padEnd(56, ' ')}&nbsp;&nbsp;|&nbsp;&nbsp;{chars}</pre>;
    }

}
