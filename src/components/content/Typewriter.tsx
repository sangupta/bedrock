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
interface TypewriterProps {
    /**
     * The message to work on
     */
    message: string;

    /**
     * Are we erasing than typing?
     */
    eraseMode?: boolean;

    /**
     * Delay between each update
     */
    timeInMillis?: number;
}

interface TypewriterState {
    index: number;
}

export default class Typewriter extends React.PureComponent<TypewriterProps, TypewriterState> {

    static defaultProps = {
        timeInMillis: 1000,
        eraseMode: false
    }

    /**
     * Reference to the timer that we create
     */
    timer: number;

    timerCreated: boolean = false;

    constructor(props: TypewriterProps) {
        super(props);

        this.state = {
            index: props.eraseMode ? props.message.length : 1
        }
    }

    componentDidMount(): void {
        this.timer = window.setInterval(this.updateValue, this.props.timeInMillis);
        this.timerCreated = true;
    }

    componentWillUnmount(): void {
        if (this.timerCreated) {
            clearInterval(this.timer);
        }
    }

    updateValue = (): void => {
        const { message, eraseMode } = this.props;
        let { index } = this.state;

        if (!eraseMode && index <= message.length) {
            index++;
            this.setState({ index: index });
            return;
        }

        if (eraseMode && index >= 0) {
            index--;
            this.setState({ index: index });
            return;
        }

        // we are done updating - stop
        clearInterval(this.timer);
        this.timerCreated = false;
    }

    render(): React.ReactNode {
        const { message } = this.props;
        const { index } = this.state;

        return message.substring(0, index);
    }

}
