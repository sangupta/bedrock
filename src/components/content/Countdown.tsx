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

/**
 * Props for the component
 */
interface CountdownProps {
    /**
     * The starting value
     */
    start: number;

    /**
     * The ending value
     */
    stop: number;

    /**
     * The stepping value to increment/decrement with
     */
    step?: number

    /**
     * Delay between each update
     */
    timeInMillis?: number;
}

interface CountdownState {
    value: number;
}

/**
 * A simple countdown component that allows to step between
 * a start and an end value (either increasing, or decreasing)
 * at a given interval.
 */
export default class Countdown extends React.PureComponent<CountdownProps, CountdownState> {

    static defaultProps = {
        timeInMillis: 1000,
        step: 1
    }

    /**
     * Reference to the timer that we create
     */
    timer: number;

    timerCreated: boolean = false;

    constructor(props: CountdownProps) {
        super(props);

        this.state = {
            value: props.start
        }
    }

    componentDidMount(): void {
        this.timer = setInterval(this.updateValue, this.props.timeInMillis);
        this.timerCreated = true;
    }

    componentWillUnmount(): void {
        if (this.timerCreated) {
            clearInterval(this.timer);
        }
    }

    updateValue = (): void => {
        const { step, stop } = this.props;
        let { value } = this.state;
        value += step;
        if (step > 0 && value <= stop) {
            this.setState({ value: value });
            return;
        }

        if (step < 0 && value >= stop) {
            this.setState({ value: value });
            return;
        }

        // we are done updating - stop
        clearInterval(this.timer);
        this.timerCreated = false;
    }

    render(): React.ReactNode {
        return this.state.value
    }

}
