import { render, act } from '@testing-library/react';
import { Countdown } from './../../../src'

// jest.useFakeTimers();

// describe('Countdown', () => {
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
// });
