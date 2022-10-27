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
