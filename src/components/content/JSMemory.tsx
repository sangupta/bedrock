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
import { BaseProps } from '../../types';
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

        return heapSize ? <span className={css}>JS memory: <ByteSize bytes={heapSize} /></span> : null
    }
}
