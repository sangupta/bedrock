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
import { buildCss } from '../../Utils';

interface IconButtonProps extends BaseProps {
    /**
     * The icon to display.
     */
    icon: string;

    /**
     * Additional eventID that needs to be passed to
     * any event handler.
     */
    eventID?: string;

    /**
     * `onClick` listener
     */
    onClick?: (e: React.MouseEvent, dataID?: string) => void;
}

/**
 * Simple icon button.
 */
export default class IconButton extends React.Component<IconButtonProps> {

    handleClick = (e: React.MouseEvent) => {
        const { onClick } = this.props;
        if (onClick) {
            onClick(e, this.props.eventID);
        }
    }

    render() {
        const { className, icon } = this.props;
        return <div className={buildCss('action-button ', className)}>
            <i className={icon} onClick={this.handleClick} />
        </div>
    }
}
