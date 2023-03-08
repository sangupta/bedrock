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
import { Code } from '../../../src';

describe('Code component', () => {

    it('renders code element with correct text content', () => {
        const text = 'const foo = "bar";';
        const { getByText } = render(<Code>{text}</Code>);
        const codeElement = getByText(text);
        expect(codeElement.tagName).toBe('CODE');
    });

    it('renders code element with custom class name', () => {
        const text = 'const foo = "bar";';
        const className = 'test-class';
        const { getByText } = render(<Code className={className}>{text}</Code>);
        const codeElement = getByText(text);
        expect(codeElement.tagName).toBe('CODE');
        expect(codeElement).toHaveClass(className);
    });
    
});
