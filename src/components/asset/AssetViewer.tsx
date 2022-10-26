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

import React from 'react'
import HexFileViewer from './HexFileViewer';
import ImageFileViewer from './ImageFileViewer';
import MarkdownFileViewer from './MarkdownFileViewer';
import MonacoFileViewer from './MonacoFileViewer';

const MONACO_EXTENSIONS = ['.json', '.tsx', '.ts', '.jsx', '.js', '.yml'];

interface AssetViewerProps {
    asset: Asset;
    useHexViwerAsDefault?: boolean;
    getUrl: (asset: Asset) => Promise<string>;
    getBytes: (asset: Asset) => Promise<ArrayBuffer>;
    onMountComplete?: () => void;
}

interface AssetViewerState {
    elementToMount: any;
}

export default class AssetViewer extends React.Component<AssetViewerProps, AssetViewerState> {

    static defaultProps = {
        useHexViwerAsDefault: true
    }

    constructor(props: AssetViewerProps) {
        super(props);

        this.state = {
            elementToMount: null
        };
    }

    componentDidMount = async (): Promise<void> => {
        const { asset, useHexViwerAsDefault } = this.props;
        let element: any;

        if (asset.mimeType?.startsWith('image')) {
            const url = await this.props.getUrl(asset);
            element = <ImageFileViewer url={url} />
        }

        if (asset.mimeType?.startsWith('text/') || MONACO_EXTENSIONS.includes(asset.extension)) {
            const decoder = new TextDecoder();
            const buffer = await this.props.getBytes(asset);
            element = <MonacoFileViewer
                key={asset.id}
                contents={decoder.decode(buffer)}
                readOnly={true}
                extension={asset.extension}
                mimeType={asset.mimeType} />
        }

        if (asset.extension === '.md') {
            const decoder = new TextDecoder();
            const buffer = await this.props.getBytes(asset);
            element = <MarkdownFileViewer key={asset.id}
                contents={decoder.decode(buffer)} />
        }

        if (!element && (useHexViwerAsDefault || asset.mimeType?.startsWith('application/octet-stream'))) {
            const buffer = await this.props.getBytes(asset);
            element = <HexFileViewer bytes={new Uint8Array(buffer)} />
        }

        if (element) {
            this.setState({ elementToMount: element });
        }

        if (this.props.onMountComplete) {
            this.props.onMountComplete();
        }
        return;
    }

    render() {
        const { elementToMount } = this.state;
        if (!elementToMount) {
            return null;
        }

        return elementToMount;
    }

}