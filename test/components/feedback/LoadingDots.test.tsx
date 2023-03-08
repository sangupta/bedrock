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
import { LoadingDots } from './../../../src'
import { getByClassName } from '../../BedrockTestUtils';

describe('LoadingDots component', () => {

    it('default render', () => {
        const { container } = render(<LoadingDots />);
        const ele = getByClassName(container, 'loading-dots')[0];
        expect(ele).toBeDefined();
    });

    it('renders the correct number of dots', () => {
        const { container } = render(<LoadingDots />);
        const ele = getByClassName(container, 'loading-dots')[0];
        const dots = ele.querySelectorAll('.loading-dot');
        expect(dots).toHaveLength(3);
    });

});
