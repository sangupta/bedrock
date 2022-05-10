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
