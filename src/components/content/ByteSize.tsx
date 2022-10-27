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
import { asByteSize } from '../../Utils';

/**
 * Props for `ByteSize` component.
 * 
 */
interface ByteSizeProps {
    bytes: number;
}

/**
 * React component to convert number of bytes into human readable form.
 * 
 * @author sangupta
 */
export default class ByteSize extends React.Component<ByteSizeProps> {

    render(): React.ReactNode {
        const { bytes } = this.props;
        if (bytes === undefined || bytes === null || bytes < 0) {
            return "";
        }

        const formatted = asByteSize(bytes);
        return <span className='format-byte-size' title={'' + this.props.bytes}>{formatted}</span>
    }

}
