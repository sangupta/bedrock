import React from 'react';
import { asDate, asDateTime, asTime } from '../../Utils';

interface DateTimeProps {
    value: number;
    valueType?: ValueType;
    type: DateTimeFormatType;
}

export default class DateTime extends React.Component<DateTimeProps> {

    formatValue(type: DateTimeFormatType, value: number) {
        switch (type) {
            case 'date-time':
                return asDateTime(value);

            case 'date':
                return asDate(value);

            case 'time':
                return asTime(value);
        }

        return value;
    }

    render() {
        const { value, valueType, type } = this.props;
        const millis = valueType === 'seconds' ? value * 1000 : value;
        const formattedValue = this.formatValue(type, millis);
        return <span className='format-date-time' title={'' + formattedValue}>{formattedValue}</span>
    }

}
