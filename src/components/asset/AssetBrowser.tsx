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

import React from 'react'
import { DataColumnFormat } from '../data/Data';
import DataTable from '../data/DataTable';
import { Asset } from './Asset';
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

/**
 * Renders an asset browser for a list of assets providing
 * the basic functionality like Finder/File Explorer. It supports
 * the following features:
 * 
 * * Allows for click/double-click on an item (file/folder)
 * * Displays the correct file icon using `AssetIcon`
 * 
 */
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

    render(): React.ReactNode {
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
