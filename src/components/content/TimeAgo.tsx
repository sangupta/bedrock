import React from 'react';
import { asTimeAgo } from '../../Utils';

interface TimeAgoProps {
    /**
     * Time in milliseconds from which the duration needs to be computed.
     */
    value: number;

    /**
     * Time in seconds from which the duration needs to be computed.
     */
    valueType?: ValueType;
}

export default class TimeAgo extends React.PureComponent<TimeAgoProps> {

    render() {
        const { value, valueType } = this.props;
        const millis = valueType === 'seconds' ? value * 1000 : value;
        const timeAgo = asTimeAgo(millis)

        return <span className='format-time-ago' title={timeAgo}>{timeAgo}</span>
    }

}
