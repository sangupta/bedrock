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
import { Spinner } from './../../../src'

describe('Spinner component', () => {

    it('default render', () => {
        const { getByRole } = render(<Spinner />);
        const element = getByRole('status');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('text-primary');
    });

    it('secondary variant', () => {
        const { getByRole } = render(<Spinner variant='secondary' />);
        const element = getByRole('status');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('text-secondary');
    });

    it('info variant', () => {
        const { getByRole } = render(<Spinner variant='info' />);
        const element = getByRole('status');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('text-info');
    });

    it('success variant', () => {
        const { getByRole } = render(<Spinner variant='success' />);
        const element = getByRole('status');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('text-success');
    });

    it('danger variant', () => {
        const { getByRole } = render(<Spinner variant='danger' />);
        const element = getByRole('status');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('text-danger');
    });

    it('warning variant', () => {
        const { getByRole } = render(<Spinner variant='warning' />);
        const element = getByRole('status');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('text-warning');
    });

    it('light variant', () => {
        const { getByRole } = render(<Spinner variant='light' />);
        const element = getByRole('status');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('text-light');
    });

    it('dark variant', () => {
        const { getByRole } = render(<Spinner variant='dark' />);
        const element = getByRole('status');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('text-dark');
    });

});
