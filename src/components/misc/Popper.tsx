import * as React from 'react';

interface PopperProps {
    /**
     * Where to place the popped element
     */
    direction?: 'top' | 'top-left' | 'top-right' |
                'left' | 'left-top' | 'left-bottom' |
                'bottom' | 'bottom-left' | 'bottom-right' |
                'right' | 'right-top' | 'right-bottom';

    /**
     * Display the arrow out of the element
     */
    arrow?: boolean;

    /**
     * Whether to monitor the displayed popper to
     * auto-align as the document is scrolled.
     */
    autoPlace?: boolean;

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

export default class Popper extends React.Component<PopperProps, any> {

    static defaultProps = {
        triggerEvent: 'onClick',
        direction: 'bottom'
    }

    state = {
        isOpen: false
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
            return <div className='bedrock-popper-parent'>
                {trigger}
            </div>;
        }

        return <div className='bedrock-popper-parent'>
            {trigger}
            <div className={'bedrock-popped popped-' + this.props.direction}>
                {children.slice(1)}
            </div>
        </div>;
    }

}
