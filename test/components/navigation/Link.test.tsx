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

    it('renders an element with correct text content and href', () => {
        const text = 'This is a link';
        const href = 'https://example.com';
        const { getByText } = render(<Link href={href}>{text}</Link>);
        const linkElement = getByText(text);
        expect(linkElement.tagName).toBe('A');
        expect(linkElement).toHaveAttribute('href', href);
    });

    it('renders an element with custom class name', () => {
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

    it('renders an element with target attribute', () => {
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

    describe('check variants that are not active', () => {
        it('renders an element with correct text and primary variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='primary'>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-primary');
            expect(linkElement).not.toHaveClass('active');
        });

        it('renders an element with correct text and secondary variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='secondary'>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-secondary');
            expect(linkElement).not.toHaveClass('active');
        });

        it('renders an element with correct text and danger variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='danger'>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-danger');
            expect(linkElement).not.toHaveClass('active');
        });

        it('renders an element with correct text and success variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='success'>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-success');
            expect(linkElement).not.toHaveClass('active');
        });

        it('renders an element with correct text and warning variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='warning'>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-warning');
            expect(linkElement).not.toHaveClass('active');
        });

        it('renders an element with correct text and dark variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='dark'>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-dark');
            expect(linkElement).not.toHaveClass('active');
        });

        it('renders an element with correct text and light variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='light'>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-light');
            expect(linkElement).not.toHaveClass('active');
        });

        it('renders an element with correct text and info variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='info'>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-info');
            expect(linkElement).not.toHaveClass('active');
        });
    });

    describe('check variants that are active', () => {
        it('renders an element with correct text and primary variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='primary' active={true}>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-primary');
            expect(linkElement).toHaveClass('active');
        });

        it('renders an element with correct text and secondary variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='secondary' active={true}>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-secondary');
            expect(linkElement).toHaveClass('active');
        });

        it('renders an element with correct text and danger variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='danger' active={true}>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-danger');
            expect(linkElement).toHaveClass('active');
        });

        it('renders an element with correct text and success variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='success' active={true}>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-success');
            expect(linkElement).toHaveClass('active');
        });

        it('renders an element with correct text and warning variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='warning' active={true}>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-warning');
            expect(linkElement).toHaveClass('active');
        });

        it('renders an element with correct text and dark variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='dark' active={true}>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-dark');
            expect(linkElement).toHaveClass('active');
        });

        it('renders an element with correct text and light variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='light' active={true}>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-light');
            expect(linkElement).toHaveClass('active');
        });

        it('renders an element with correct text and info variant', () => {
            const text = 'This is a link';
            const href = 'https://example.com';
            const { getByText } = render(<Link href={href} variant='info' active={true}>{text}</Link>);
            const linkElement = getByText(text);
            expect(linkElement.tagName).toBe('A');
            expect(linkElement).toHaveAttribute('href', href);
            expect(linkElement).toHaveClass('link-info');
            expect(linkElement).toHaveClass('active');
        });
    });
});
