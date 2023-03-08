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
import { Image } from '../../../src';

describe('Image component', () => {

    it('renders image element with correct src and alt attributes', () => {
        const src = 'https://example.com/image.jpg';
        const alt = 'Test Image';
        const { container } = render(<Image src={src} alt={alt} />);
        const imageElement = container.querySelector('img');
        expect(imageElement).toHaveAttribute('src', src);
        expect(imageElement).toHaveAttribute('alt', alt);
    });

    it('renders image element with custom class name', () => {
        const src = 'https://example.com/image.jpg';
        const alt = 'Test Image';
        const className = 'test-class';
        const { container } = render(
            <Image src={src} alt={alt} className={className} />
        );
        const imageElement = container.querySelector('img');
        expect(imageElement).toHaveAttribute('src', src);
        expect(imageElement).toHaveAttribute('alt', alt);
        expect(imageElement).toHaveClass(className);
    });

    it('renders image element with custom width and height', () => {
        const src = 'https://example.com/image.jpg';
        const alt = 'Test Image';
        const width = '200';
        const height = '300';
        const { container } = render(
            <Image src={src} alt={alt} width={width} height={height} />
        );
        const imageElement = container.querySelector('img');
        expect(imageElement).toHaveAttribute('src', src);
        expect(imageElement).toHaveAttribute('alt', alt);
        expect(imageElement).toHaveAttribute('width', width);
        expect(imageElement).toHaveAttribute('height', height);
    });
    
});
