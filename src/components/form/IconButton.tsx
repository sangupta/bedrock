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
