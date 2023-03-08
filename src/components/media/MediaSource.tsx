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
import { BaseProps } from '../../types';
import { buildProps } from '../../Utils';

/**
 * Props for the component
 */
interface MediaSourceProps extends BaseProps, React.HTMLProps<HTMLSourceElement> {

    /**
     * The MIME type for the source as described in https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
     * optionally with a codec parameter.
     */
    type: string;

    src?: string;

    srcSet?: string;

    mediaQuery?: string;

    width?: number;

    height?: number;
}

export default class MediaSource extends React.PureComponent<MediaSourceProps> {

    render(): React.ReactNode {
        const { type, src, srcSet, mediaQuery, width, height, className } = this.props;
        const extraProps = buildProps({
            width: width,
            height: height,
            src: src,
            srcset: srcSet,
            media: srcSet && mediaQuery ? mediaQuery : ''
        });

        return <source type={type} {...extraProps} className={className} />
    }

}
