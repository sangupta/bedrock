import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface PopperProps extends BaseProps {
    /**
     * Where to place the popped element
     */
    direction?: 'top' | 'top-left' | 'top-right' |
    'left' | 'left-top' | 'left-bottom' |
    'bottom' | 'bottom-left' | 'bottom-right' |
    'right' | 'right-top' | 'right-bottom';

    /**
     * CSS class applied to the container for the popped
     * element
     */
    popClassName?: string;

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

interface PopperState {
    isOpen: boolean;
}

export default class Popper extends React.Component<PopperProps, PopperState> {

    static defaultProps = {
        triggerEvent: 'onClick',
        direction: 'bottom-left'
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
        console.log('state modified to: ', this.state.isOpen);

        const css: string = mergeCSS('bedrock-popper', this.props.className);
        const extra: any = getProps(this.props);

        const children = React.Children.toArray(this.props.children);
        if (!children || children.length === 0) {
            return null;
        }

        const trigger = this.getTriggerElement(children[0]);
        if (!this.state.isOpen) {
            return <div {...extra} className={css}>
                {trigger}
            </div>;
        }

        const popClass: string = mergeCSS('bedrock-popped popped-' + this.props.direction, this.props.popClassName);
        return <div {...extra} className={css}>
            {trigger}
            <div className={popClass}>
                {children.slice(1)}
            </div>
        </div>;
    }

}
