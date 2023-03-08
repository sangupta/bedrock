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

export interface ImageFileViewerProps {
    url: string;
}

/**
* A basic image file viewer. It supports basic non-destructive 
* controls.
* 
*/
export default class ImageFileViewer extends React.Component<ImageFileViewerProps> {

    render() {
        const { url } = this.props;
        if (!url) {
            return null;
        }

        return <div className='image-file-viewer w-100 h-100' id='image-viewer'>
            <img src={url} crossOrigin='anonymous' className='img-fluid' />
        </div>
    }

}
