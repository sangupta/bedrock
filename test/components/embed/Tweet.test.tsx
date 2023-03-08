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
import { Tweet } from './../../../src';

describe('Tweet component', () => {

    it('default render', () => {
        const { container } = render(<Tweet id="123456" />);
        const element = container.querySelector('.embedded-tweet');
        expect(element).toBeInTheDocument();
    });

});
