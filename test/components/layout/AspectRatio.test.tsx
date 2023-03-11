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
import { AspectRatio } from '../../../src';
import { getFirstByClassName } from '../../BedrockTestUtils';

describe('AspectRatio', () => {

    test('default render, 1x1', () => {
        const { container } = render(<AspectRatio ratio='1x1' />);
        const element = getFirstByClassName(container, 'ratio');
        expect(element).toBeDefined();
        expect(element.tagName.toLowerCase()).toBe('div');
        expect(element.classList.contains('ratio-1x1')).toEqual(true);
    });

    test('default render, 4x3', () => {
        const { container } = render(<AspectRatio ratio='4x3' />);
        const element = getFirstByClassName(container, 'ratio');
        expect(element).toBeDefined();
        expect(element.tagName.toLowerCase()).toBe('div');
        expect(element.classList.contains('ratio-4x3')).toEqual(true);
    });

    test('default render, 16x9', () => {
        const { container } = render(<AspectRatio ratio='16x9' />);
        const element = getFirstByClassName(container, 'ratio');
        expect(element).toBeDefined();
        expect(element.tagName.toLowerCase()).toBe('div');
        expect(element.classList.contains('ratio-16x9')).toEqual(true);
    });

    test('default render, 21x9', () => {
        const { container } = render(<AspectRatio ratio='21x9' />);
        const element = getFirstByClassName(container, 'ratio');
        expect(element).toBeDefined();
        expect(element.tagName.toLowerCase()).toBe('div');
        expect(element.classList.contains('ratio-21x9')).toEqual(true);
    });

});
