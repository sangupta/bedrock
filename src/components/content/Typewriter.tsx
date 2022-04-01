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
        this.timer = setInterval(this.updateValue, this.props.timeInMillis);
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
