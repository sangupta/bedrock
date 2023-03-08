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
import { render } from '@testing-library/react';
import { AssetIcon } from './../../../src'
import { TestAsset } from './TestAsset';
import { getFirstByTagName } from '../../BedrockTestUtils';

describe('AssetIcon component', () => {

    it('renders image for jpeg', () => {
        const asset = Object.assign({}, TestAsset);
        const { container } = render(<AssetIcon asset={asset} />);
        const element = getFirstByTagName(container, 'i');
        expect(element.classList.contains('format-file-icon')).toBe(true);
        expect(element.classList.contains('bi')).toBe(true);
        expect(element.classList.contains('bi-file-image')).toBe(true);
    });

    it('renders image for svg', () => {
        const asset = Object.assign({}, TestAsset);
        asset.extension = 'svg';
        const { container } = render(<AssetIcon asset={asset} />);
        const element = getFirstByTagName(container, 'i');
        expect(element.classList.contains('format-file-icon')).toBe(true);
        expect(element.classList.contains('bi')).toBe(true);
        expect(element.classList.contains('bi-file')).toBe(true);
    });

    it('renders image for folder', () => {
        const asset = Object.assign({}, TestAsset);
        asset.isFolder = true;
        const { container } = render(<AssetIcon asset={asset} />);
        const element = getFirstByTagName(container, 'i');
        expect(element.classList.contains('format-file-icon')).toBe(true);
        expect(element.classList.contains('bi')).toBe(true);
        expect(element.classList.contains('bi-folder-fill')).toBe(true);
    });

    it('renders image for word doc files', () => {
        const asset = Object.assign({}, TestAsset);
        asset.extension = 'doc';
        let { container } = render(<AssetIcon asset={asset} />);
        const element = getFirstByTagName(container, 'i');
        expect(element.classList.contains('format-file-icon')).toBe(true);
        expect(element.classList.contains('bi')).toBe(true);
        expect(element.classList.contains('bi-file-word')).toBe(true);
    });

    it('renders image for word docx files', () => {
        const asset = Object.assign({}, TestAsset);
        asset.extension = 'docx';
        let { container } = render(<AssetIcon asset={asset} />);
        const element = getFirstByTagName(container, 'i');
        expect(element.classList.contains('format-file-icon')).toBe(true);
        expect(element.classList.contains('bi')).toBe(true);
        expect(element.classList.contains('bi-file-word')).toBe(true);
    });

});
