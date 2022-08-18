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

/**
 * Computes the duration that has elapsed since the provided
 * time and converts it into a human readable string using
 * the most relevant part. This component can render time such as:
 * 
 * * moments ago
 * * 2 minutes ago
 * * 4 hours ago
 * * 6 days ago
 * * 1 month ago
 * * 3 years ago
 * 
 * It takes care of the singular/plural version of the language.
 * 
 * @author sangupta
 */
export default class TimeAgo extends React.PureComponent<TimeAgoProps> {

    render(): React.ReactNode {
        const { value, valueType } = this.props;
        const millis = valueType === 'seconds' ? value * 1000 : value;
        const timeAgo = asTimeAgo(millis)

        return <span className='format-time-ago' title={timeAgo}>{timeAgo}</span>
    }

}
