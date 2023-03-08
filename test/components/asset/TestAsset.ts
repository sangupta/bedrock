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

import { Asset } from "../../../src/components/asset/Asset";

export const TestAsset: Asset = {
    id: 'test-id',
    name: 'test-asset',
    extension: 'jpg',
    created: Date.now(),
    isFolder: false,
    isSymLink: false,
    modified: Date.now(),
    path: '/',
    size: 1022
}
