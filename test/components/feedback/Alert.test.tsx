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
