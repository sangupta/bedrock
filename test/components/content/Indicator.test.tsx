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
import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Indicator } from './../../../src'

describe('<Indicator />', () => {

    test('Default render', () => {
        render(<Indicator data-testid='test' />)
        expect(screen.getByTestId('test')).toBeDefined();
    });

});
