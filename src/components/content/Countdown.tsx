/**
 *
 * bedrock - UI Component Library
 * Copyright (c) 2020, Sandeep Gupta
 *
 * https://bedrock.sangupta.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 		http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
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
