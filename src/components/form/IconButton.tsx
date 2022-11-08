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
import { BaseProps } from '../../types';
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
