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
import { asTimeAgo } from '../../Utils';

interface TimeAgoProps {

    /**
     * Time in milli-seconds from which the duration needs to be computed.
     */
    millis: number;
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
        const { millis } = this.props;
        if (millis === undefined || millis === null || millis < 0) {
            return "";
        }
        
        const timeAgo = asTimeAgo(millis)
        return <span className='format-time-ago' title={timeAgo}>{timeAgo}</span>
    }

}
