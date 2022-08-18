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

interface ImageFileViewerProps {
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
