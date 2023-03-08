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
import { Youtube } from './../../../src';

describe('Youtube component', () => {

    it('renders without crashing', () => {
        const { container } = render(<Youtube id="123456" />);
        const element = container.querySelector('iframe');
        expect(element).toBeInTheDocument();
    });

    it('renders the video with the correct ID', () => {
        const { container } = render(<Youtube id="123456" />);
        const element = container.querySelector('iframe');
        expect(element).toHaveAttribute('src', expect.stringContaining('123456'));
    });

    it('renders the video with the specified width', () => {
        const { container } = render(<Youtube id="123456" width={400} />);
        const element = container.querySelector('iframe');
        expect(element).toHaveAttribute('width', '400');
    });

    it('renders the video with the specified height', () => {
        const { container } = render(<Youtube id="123456" height={400} />);
        const element = container.querySelector('iframe');
        expect(element).toHaveAttribute('height', '400');
    });

    // it('renders the video with the specified start time', () => {
    //     const { getByTestId } = render(<Youtube id="123456" start="30" />);
    //     const iframe = getByTestId('youtube').querySelector('iframe');
    //     expect(iframe).toHaveAttribute('src', expect.stringContaining('start=30'));
    // });

    // it('renders the video with the specified end time', () => {
    //     const { getByTestId } = render(<Youtube id="123456" end="60" />);
    //     const iframe = getByTestId('youtube').querySelector('iframe');
    //     expect(iframe).toHaveAttribute('src', expect.stringContaining('end=60'));
    // });

});
