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
import { render, act } from '@testing-library/react';
import { Countdown } from './../../../src'

jest.useFakeTimers();

describe('Countdown', () => {

    test('render default', () => {
        const { getByText } = render(<Countdown start={10} stop={20} timeInMillis={500} />);
        expect(getByText('10')).toBeInTheDocument();
    });

    test('test timer', () => {
        const { getByText } = render(<Countdown start={10} stop={20} timeInMillis={500} step={2} />);

        expect(getByText('10')).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(250);
        });
        expect(getByText('10')).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(250);
        });
        expect(getByText('12')).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(500);
        });
        expect(getByText('14')).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(500);
        });
        expect(getByText('16')).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(500);
        });
        expect(getByText('18')).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(500);
        });
        expect(getByText('20')).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(500);
        });
        expect(getByText('20')).toBeInTheDocument();
    });

    //     test('should render the initial countdown value', () => {
    //         const { getByText } = render(<Countdown endTime={Date.now() + 10000} />);
    //         expect(getByText('00:10')).toBeInTheDocument();
    //     });

    //     test('should update the countdown value', () => {
    //         const { getByText } = render(<Countdown endTime={Date.now() + 10000} />);
    //         act(() => {
    //             jest.advanceTimersByTime(5000);
    //         });
    //         expect(getByText('00:05')).toBeInTheDocument();
    //     });

    //     test('should render the end message when the countdown ends', () => {
    //         const { getByText } = render(<Countdown endTime={Date.now() + 1000} />);
    //         act(() => {
    //             jest.advanceTimersByTime(1000);
    //         });
    //         expect(getByText('Countdown ended.')).toBeInTheDocument();
    //     });
});
