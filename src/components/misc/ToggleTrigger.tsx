import * as React from 'react';

interface ToggleTriggerProps {
    /**
     * Whether the toggle is open or not
     */
    isOpen?: boolean;

    /**
     * Specifies the event on the trigger element to capture to show/hide
     * toggle. The default value is `onClick`.
     */
    triggerEvent?: string;
    
    /**
     * Handler called when toggle is open
     */
    onShow?: Function;

    /**
     * Handler called when toggle is closed
     */
    onClose?: Function;

}

/**
 * A trigger that traps `onClick` event on the trigger (the first child)
 * element, and toggles the visibility of all other children.
 * 
 */
export default class ToggleTrigger extends React.Component<ToggleTriggerProps, any> {

    static defaultProps = {
        isOpen: false,
        triggerEvent: 'onClick'
    }

    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen
        }
    }

    handleClick = () => {
        this.setState(state => {
            return { isOpen: !state.isOpen }
        }, this.shootEvents);
    }

    /**
     * Shoot onShow/onClose events on dropdown
     */
    shootEvents = () => {
        if (this.state.isOpen) {
            if (this.props.onShow) {
                this.props.onShow();
            }

            return;
        }

        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        const children = React.Children.toArray(this.props.children);
        if (!children || children.length === 0) {
            return null;
        }

        let triggerElement: any = children[0];

        // build the trigger props
        const triggerProps = {};

        triggerProps[this.props.triggerEvent] = this.handleClick;

        // create the trigger
        let trigger = React.cloneElement(triggerElement, triggerProps, null);

        if(!this.state.isOpen) {
            return trigger;
        }

        // the toggle trigger is open - show everything
        let all: Array<any> = [];
        all.push(trigger);

        // check how many non-trigger children do we have
        all.push(children.slice(1));

        return all;
    }

}
