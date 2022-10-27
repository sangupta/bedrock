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

interface Asset {
    /**
     * Unique ID for this file/asset
     */
    id: string;

    /**
     * The filename for this asset
     */
    name: string;

    /**
     * The extension for this asset
     */
    extension: string;

    /**
     * Time in epoch millis when this file was created
     */
    created: number;

    /**
     * Is this asset a folder?
     */
    isFolder: boolean;

    /**
     * Is this asset a symbolic link?
     */
    isSymLink: boolean;

    /**
     * The MIME type associated with this asset
     */
    mimeType?: string;

    /**
     * Time in epoch millis when this file was modified
     */
    modified: number;

    /**
     * The full path of this asset in the repository
     */
    path: string;

    /**
     * File perimssions associated, if any, represented as a string
     */
    permissions?: string;

    /**
     * Size in mumber of bytes
     */
    size: number;
}
