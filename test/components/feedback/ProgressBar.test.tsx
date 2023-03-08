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
import { render, fireEvent } from '@testing-library/react';
import { ProgressBar } from './../../../src'

describe('ProgressBar', () => {

    test('default render', () => {
        const { container } = render(<ProgressBar />);
        const progressBar = container.querySelector('.progress');
        expect(progressBar).toBeDefined();
    });

});
