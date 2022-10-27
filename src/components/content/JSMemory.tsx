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
import { buildCss } from '../../Utils';
import ByteSize from './ByteSize';

interface JSMemoryProps extends BaseProps {

    /**
     * Interval in milliseconds at which the value is automatically
     * updated. Use a value of less than zero to disable auto-updates.
     */
    updateIntervalInMillis?: number;
}

/**
 * Displays and updates the memory consumed by the browser
 * for this particular tab/window. It is automatically updated
 * at specified interval (default 5 seconds). The component
 * requires that `window.performance` object is available in
 * the browser. If the object `window.performance` is not available,
 * the component will not render anything. Refer to 
 * https://caniuse.com/mdn-api_performance for browser compatibility.
 * 
 * @author sangupta
 */
export default class JSMemory extends React.Component<JSMemoryProps> {

    static defaultProps: JSMemoryProps = {
        updateIntervalInMillis: 5000
    }

    timer: number = 0;

    docHidden: boolean = false;

    componentDidMount() {
        const { updateIntervalInMillis } = this.props;
        if (updateIntervalInMillis < 0) {
            return;
        }

        this.timer = setInterval(() => {
            if (!document.hidden) {
                this.forceUpdate();
            }
        }, updateIntervalInMillis);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const performance: any = window.performance;
        const heapSize = performance?.memory?.usedJSHeapSize;
        if (!heapSize) {
            return null;
        }

        const css: string = buildCss('span-jsmemory', this.props.className);

        return heapSize ? <span className="">JS memory: <ByteSize bytes={heapSize} /></span> : null
    }
}
