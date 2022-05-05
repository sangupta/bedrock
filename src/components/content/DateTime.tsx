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
