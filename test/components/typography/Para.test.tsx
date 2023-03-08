import React from 'react';
import { render } from '@testing-library/react';
import { Para } from '../../../src';

describe('Para component', () => {

    it('renders p element with correct text content', () => {
        const text = 'This is a paragraph.';
        const { getByText } = render(<Para>{text}</Para>);
        const paraElement = getByText(text);
        expect(paraElement.tagName).toBe('P');
    });

    it('renders p element with custom class name', () => {
        const text = 'This is a paragraph.';
        const className = 'test-class';
        const { getByText } = render(<Para className={className}>{text}</Para>);
        const paraElement = getByText(text);
        expect(paraElement.tagName).toBe('P');
        expect(paraElement).toHaveClass(className);
    });
    
});
