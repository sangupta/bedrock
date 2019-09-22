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
    onOpen?: Function;

    /**
     * Handler called when toggle is closed
     */
    onClose?: Function;

}

interface ToggleTriggerState {
    isOpen: boolean;
}

/**
 * A trigger that traps `onClick` event on the trigger (the first child)
 * element, and toggles the visibility of all other children.
 * 
 */
export default class ToggleTrigger extends React.Component<ToggleTriggerProps, ToggleTriggerState> {

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
            if (this.props.onOpen) {
                this.props.onOpen();
            }

            return;
        }

        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    /**
     * Create the trigger element from the base
     * first child so that we can trap the click
     * event on it.
     */
    getTriggerElement = (triggerElement: any) => {
        // build the trigger props
        const triggerProps = {};

        triggerProps[this.props.triggerEvent] = this.handleClick;

        // create the trigger
        return React.cloneElement(triggerElement, triggerProps, null);
    }

    render() {
        const children = React.Children.toArray(this.props.children);
        if (!children || children.length === 0) {
            return null;
        }

        const trigger = this.getTriggerElement(children[0]);
        if (!this.state.isOpen) {
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
