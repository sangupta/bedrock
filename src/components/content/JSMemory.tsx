import React from 'react';
import { buildCss } from '../../Utils';
import ByteSize from './ByteSize';

interface JSMemoryProps extends BaseProps {
    updateIntervalInMillis?: number;
}

/**
 * Displays and updates the memory consumed by the browser
 * for this particular tab/window. It is automatically updated
 * at specified interval (default 5 seconds).
 * 
 */
export default class JSMemory extends React.Component<JSMemoryProps> {

    static defaultProps: JSMemoryProps = {
        updateIntervalInMillis: 5000
    }

    timer: number = 0;

    docHidden: boolean = false;

    componentDidMount() {
        const { updateIntervalInMillis } = this.props;
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

        const css: string = buildCss('span-jsmemory', this.props.className);

        return heapSize ? <span className="">JS memory: <ByteSize bytes={heapSize} /></span> : null
    }
}
