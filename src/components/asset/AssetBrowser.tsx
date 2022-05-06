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
import DataTable from '../data/DataTable';
import AssetIcon from './AssetIcon';

interface AssetBrowserProps {
    assets?: Array<Asset>
    onAssetClick?: (asset: Asset) => void;
    onAssetOpen?: (asset: Asset) => void;
    displayColumns: Array<DataColumnFormat>;
}

interface AssetBrowserState {
    selectedAsset?: Asset;
}

export default class AssetBrowser extends React.Component<AssetBrowserProps, AssetBrowserState> {

    constructor(props: AssetBrowserProps) {
        super(props);

        this.state = {};
    }

    handleAssetClick = (asset: Asset) => {
        this.setState({ selectedAsset: asset });
        if (this.props.onAssetClick) {
            this.props.onAssetClick(asset);
        }
    }

    getFileIcon = (asset: Asset): React.ReactNode => {
        if (!asset) {
            return null;
        }

        return <AssetIcon asset={asset} />
    }

    render() {
        const { assets, displayColumns } = this.props;

        return <DataTable
            columns={displayColumns}
            data={assets as any[]}
            onRowClick={this.handleAssetClick}
            onRowDoubleClick={this.props.onAssetOpen}
            selectedRow={this.state.selectedAsset}
            getIconForItem={this.getFileIcon}
            rowKeyAttribute='id' />
    }

}
