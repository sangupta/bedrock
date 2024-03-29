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
import { act, render } from '@testing-library/react';
import { Alert } from './../../../src'

describe('Alert component', () => {

    it('renders default', () => {
        const { getByRole } = render(<Alert variant="info">Hello world</Alert>);
        expect(getByRole('alert')).toBeInTheDocument();
    });

    it('renders the correct alert type', () => {
        const { getByRole } = render(<Alert variant="info">Hello world</Alert>);
        expect(getByRole('alert')).toHaveClass('alert-info');
    });

    it('renders the correct content', () => {
        const { getByText } = render(<Alert variant="info">Hello world</Alert>);
        expect(getByText('Hello world')).toBeInTheDocument();
    });

});
