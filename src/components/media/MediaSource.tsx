/**
 *
 * bedrock - UI Component Library
 * Copyright (c) 2020, Sandeep Gupta
 *
 * https://bedrock.sangupta.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 		http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import React from 'react';
import { buildProps } from '../../Utils';

/**
 * Props for the component
 */
interface MediaSourceProps {

    /**
     * The MIME type for the source as described in https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
     * optionally with a codec parameter.
     */
    mimeType: string;

    src?: string;

    srcSet?: string;

    mediaQuery?: string;

    width?: number;

    height?: number;
}

export default class MediaSource extends React.PureComponent<MediaSourceProps> {

    render(): React.ReactNode {
        const { mimeType, src, srcSet, mediaQuery, width, height } = this.props;
        const extraProps = buildProps({
            width: width,
            height: height,
            src: src,
            srcset: srcSet,
            media: srcSet && mediaQuery ? mediaQuery : ''
        });

        return <source type={mimeType} {...extraProps} />
    }

}
