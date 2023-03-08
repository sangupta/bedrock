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
import { ByteSize } from './../../../src'
import { getFirstByTagName } from '../../BedrockTestUtils';

describe('ByteSize', () => {

    test('render default', () => {
        const { container } = render(<ByteSize bytes={1024} />);
        const ele = getFirstByTagName(container, 'span');
        expect(ele).toBeDefined();
        expect(ele.classList.contains('format-byte-size')).toBe(true);
    });

    test('render empty when undefined', () => {
        const { container } = render(<ByteSize bytes={undefined} />);
        expect(container.children.length).toBe(0);
    })

    test('render empty when negative numer', () => {
        const { container } = render(<ByteSize bytes={-1} />);
        expect(container.children.length).toBe(0);
    });

    test('render empty when zero', () => {
        const { getByText } = render(<ByteSize bytes={0} />);
        expect(getByText('0 bytes')).toBeInTheDocument();
    });

    test('should render a byte size in B format', () => {
        const { getByText } = render(<ByteSize bytes={1023} />);
        expect(getByText('1023 bytes')).toBeInTheDocument();
    });

    test('should render a byte size in KB format', () => {
        const { getByText } = render(<ByteSize bytes={1023 * 1024} />);
        expect(getByText('1023 KB')).toBeInTheDocument();
    });

    test('should render a byte size in MB format', () => {
        const { getByText } = render(<ByteSize bytes={1023 * 1024 * 1024} />);
        expect(getByText('1023 MB')).toBeInTheDocument();
    });

    test('should render a byte size in GB format', () => {
        const { getByText } = render(<ByteSize bytes={1023 * 1024 * 1024 * 1024} />);
        expect(getByText('1023 GB')).toBeInTheDocument();
    });

    test('should render a byte size in TB format', () => {
        const { getByText } = render(<ByteSize bytes={1023 * 1024 * 1024 * 1024 * 1024} />);
        expect(getByText('1023 TB')).toBeInTheDocument();
    });

    test('should render a byte size in PB format', () => {
        const { getByText } = render(<ByteSize bytes={1023 * 1024 * 1024 * 1024 * 1024 * 1024} />);
        expect(getByText('1023 PB')).toBeInTheDocument();
    });

    test('should render a byte size in EB format', () => {
        const { getByText } = render(<ByteSize bytes={1023 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024} />);
        expect(getByText('1023 EB')).toBeInTheDocument();
    });

});
