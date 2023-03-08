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
import { MediaSource } from '../../../src';

describe('MediaSource component', () => {

    it('renders source element with correct src and type attributes', () => {
        const src = 'https://example.com/video.mp4';
        const type = 'video/mp4';
        const { container } = render(<MediaSource src={src} type={type} />);
        const sourceElement = container.querySelector('source');
        expect(sourceElement).toHaveAttribute('src', src);
        expect(sourceElement).toHaveAttribute('type', type);
    });

    it('renders source element with custom class name', () => {
        const src = 'https://example.com/video.mp4';
        const type = 'video/mp4';
        const className = 'test-class';
        const { container } = render(
            <MediaSource src={src} type={type} className={className} />
        );
        const sourceElement = container.querySelector('source');
        expect(sourceElement).toHaveAttribute('src', src);
        expect(sourceElement).toHaveAttribute('type', type);
        expect(sourceElement).toHaveClass(className);
    });
    
});
