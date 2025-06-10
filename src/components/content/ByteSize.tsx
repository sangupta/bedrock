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
import { asByteSize, buildCss } from '../../Utils';

/**
 * Props for `ByteSize` component.
 * 
 */
export interface ByteSizeProps {
    bytes: number;
    className?: string;
}

/**
 * React component to convert number of bytes into human readable form.
 * 
 * @author sangupta
 */
export default class ByteSize extends React.Component<ByteSizeProps> {

    render(): React.ReactNode {
        const { bytes, className = '' } = this.props;
        if (bytes === undefined || bytes === null || bytes < 0) {
            return "";
        }

        const formatted = asByteSize(bytes);
        const css = buildCss('format-byte-size', className)
        return <span className={css} title={'' + this.props.bytes}>{formatted}</span>
    }

}
