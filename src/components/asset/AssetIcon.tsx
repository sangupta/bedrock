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
import { getAssetIcon } from '../../Utils';

interface AssetIconProps {
    asset: Asset;
}

/**
 * Renders the icon depending on the file/asset using
 * the provided MIME type or extension. This component
 * uses Bootstrap icons.
 * 
 */
export default class AssetIcon extends React.PureComponent<AssetIconProps> {

    render(): React.ReactNode {
        const { asset } = this.props;
        const icon = getAssetIcon(asset);
        return <i className={'format-file-icon ' + (icon || '')} />
    }

}
