import React from 'react';
import { render } from '@testing-library/react';
import { BlockQuote } from '../../../src';

describe('BlockQuote component', () => {
    it('renders blockquote element with correct text content', () => {
        const text = 'This is a quote.';
        const { getByText } = render(<BlockQuote>{text}</BlockQuote>);
        const blockQuoteElement = getByText(text);
        expect(blockQuoteElement.tagName).toBe('BLOCKQUOTE');
    });

    it('renders blockquote element with custom class name', () => {
        const text = 'This is a quote.';
        const className = 'test-class';
        const { getByText } = render(
            <BlockQuote className={className}>{text}</BlockQuote>
        );
        const blockQuoteElement = getByText(text);
        expect(blockQuoteElement.tagName).toBe('BLOCKQUOTE');
        expect(blockQuoteElement).toHaveClass(className);
    });
});
