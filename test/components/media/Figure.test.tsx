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
import { Figure } from '../../../src';

describe('Figure component', () => {

    it('default render', () => {
        const imageSrc = 'https://example.com/image.png';
        const { getByRole, container } = render(<Figure imgSrc={imageSrc} />);
        const ele = container.firstChild as Element;
        expect(ele.tagName).toBe('FIGURE');
        expect(ele.classList.contains('figure')).toBe(true);

        const image = getByRole('img');
        expect(image).toHaveAttribute('src', imageSrc);
        expect(image.classList.contains('figure-img')).toBe(true);

        const caption = image.nextElementSibling;
        expect(caption.tagName).toBe('FIGCAPTION');
        expect(caption.classList.contains('figure-caption')).toBe(true);
    });

    it('responsive render', () => {
        const imageSrc = 'https://example.com/image.png';
        const { getByRole, container } = render(<Figure imgSrc={imageSrc} responsive={true} />);
        const ele = container.firstChild as Element;
        expect(ele.tagName).toBe('FIGURE');
        expect(ele.classList.contains('figure')).toBe(true);

        const image = getByRole('img');
        expect(image).toHaveAttribute('src', imageSrc);
        expect(image.classList.contains('figure-img')).toBe(true);
        expect(image.classList.contains('img-fluid')).toBe(true);

        const caption = image.nextElementSibling;
        expect(caption.tagName).toBe('FIGCAPTION');
        expect(caption.classList.contains('figure-caption')).toBe(true);
    });

    it('rounded render', () => {
        const imageSrc = 'https://example.com/image.png';
        const { getByRole, container } = render(<Figure imgSrc={imageSrc} rounded={true} />);
        const ele = container.firstChild as Element;
        expect(ele.tagName).toBe('FIGURE');
        expect(ele.classList.contains('figure')).toBe(true);

        const image = getByRole('img');
        expect(image).toHaveAttribute('src', imageSrc);
        expect(image.classList.contains('figure-img')).toBe(true);
        expect(image.classList.contains('rounded')).toBe(true);

        const caption = image.nextElementSibling;
        expect(caption.tagName).toBe('FIGCAPTION');
        expect(caption.classList.contains('figure-caption')).toBe(true);
    });

});
