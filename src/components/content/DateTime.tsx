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
import { asDate, asDateTime, asTime } from '../../Utils';
import { DateTimeFormatType, ValueType } from '../data/Data';

interface DateTimeProps {
    value: number;
    valueType?: ValueType;
    type: DateTimeFormatType;
}

export default class DateTime extends React.Component<DateTimeProps> {

    formatValue(type: DateTimeFormatType, value: number): string | number {
        switch (type) {
            case 'date-time':
                return asDateTime(value);

            case 'date':
                return asDate(value);

            case 'time':
                return asTime(value);

            default:
                return value;
        }
    }

    render(): React.ReactNode {
        const { value, valueType, type } = this.props;
        if(value === undefined || value === null || value < 0) {
            return "";
        }

        const millis = valueType === 'seconds' ? value * 1000 : value;
        const formattedValue = this.formatValue(type, millis);
        return <span className='format-date-time' title={'' + formattedValue}>{formattedValue}</span>
    }

}
