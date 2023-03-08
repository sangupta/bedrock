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
import { Link } from '../../../src';

describe('Link component', () => {

    it('renders a element with correct text content and href', () => {
        const text = 'This is a link';
        const href = 'https://example.com';
        const { getByText } = render(<Link href={href}>{text}</Link>);
        const linkElement = getByText(text);
        expect(linkElement.tagName).toBe('A');
        expect(linkElement).toHaveAttribute('href', href);
    });

    it('renders a element with custom class name', () => {
        const text = 'This is a link';
        const href = 'https://example.com';
        const className = 'test-class';
        const { getByText } = render(
            <Link href={href} className={className}>
                {text}
            </Link>
        );
        const linkElement = getByText(text);
        expect(linkElement.tagName).toBe('A');
        expect(linkElement).toHaveAttribute('href', href);
        expect(linkElement).toHaveClass(className);
    });

    it('renders a element with target attribute', () => {
        const text = 'This is a link';
        const href = 'https://example.com';
        const target = '_blank';
        const { getByText } = render(
            <Link href={href} target={target}>
                {text}
            </Link>
        );
        const linkElement = getByText(text);
        expect(linkElement.tagName).toBe('A');
        expect(linkElement).toHaveAttribute('href', href);
        expect(linkElement).toHaveAttribute('target', target);
    });

});
