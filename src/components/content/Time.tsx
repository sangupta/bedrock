import React from 'react'

interface TimeProps {
    time: Date | number;
    timeZone?: string;
    name?: string;
}

export default class Time extends React.Component<TimeProps> {

    render() {
        const { time, timeZone, name } = this.props;
        if (!time) {
            return null;
        }

        const date = (typeof time === 'number') ? new Date(time) : time;

        const tz = timeZone ? date.toLocaleTimeString('en-US', { timeZone: timeZone }) : date.toLocaleTimeString('en-US');
        const firstColon = tz.indexOf(':');
        const secondColon = tz.indexOf(':', firstColon + 1);
        const str = tz.substring(0, secondColon) + ' ' + tz.substring(tz.length - 2);

        return <div className='clock'>
            <span className='clock-name'>{name || ''}</span>
            <span className='clock-time'>{str}</span>
        </div>
    }

}
