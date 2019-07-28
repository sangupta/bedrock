import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';
import SplitButton from './../buttons/SplitButton';
import Menu from './Menu';

interface DropdownProps extends BaseProps {
    /**
     * Whether the dropdown is open or not
     */
    isOpen?: boolean;

    /**
     * Specifies the event on the trigger element to capture to show/hide
     * dropdown. The default value is `onClick`.
     */
    triggerEvent?: string;

    /**
     * Handler called when dropdown is open
     */
    onShow?: Function;

    /**
     * Handler called when dropdown is close
     */
    onClose?: Function;

    /**
     * Function called when a dropdown menu item is selected
     */
    onSelect?: Function;

    /**
     * Dropdown position to display
     */
    position?: 'down' | 'up' | 'right' | 'left';
}

interface DropdownState {
    /**
     * Is the dropdown open or not
     */
    isOpen: boolean;
}

/**
 * Renders a simple drop down that displays a list of
 * options. The popup always opens below the trigger
 * element.
 */
export default class Dropdown extends React.Component<DropdownProps, DropdownState> {

    static defaultProps = {
        isOpen: false,
        triggerEvent: 'onClick',
        position: 'down'
    }

    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen
        }
    }

    /**
     * Close the menu
     */
    closeMenu = () => {
        this.setState({ isOpen: false }, this.shootEvents);
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

    /**
     * Handle click event
     */
    handleClick = () => {
        this.setState(state => {
            return { isOpen: !state.isOpen }
        }, this.shootEvents);
    }

    handleSelect = (selected) => {
        if (this.props.onSelect) {
            this.props.onSelect(selected);
        }
    }

    render() {
        // a dropdown has 2 children, the first is the toggle
        // that shows the second child
        let children = React.Children.toArray(this.props.children);
        if (children.length < 2) {
            return this.props.children;
        }

        // get the trigger element
        let triggerElement: any = children[0];
        if (typeof triggerElement === 'string' || typeof triggerElement === 'number') {
            triggerElement = <div>{triggerElement}</div>;
        }

        // special case for SplitButton handling
        let eventName: string = this.props.triggerEvent;
        if (triggerElement.type === SplitButton) {
            eventName = 'onAction';
        }

        // build the trigger props
        const triggerProps = {};

        triggerProps[eventName] = this.handleClick;

        // create the trigger
        let trigger = React.cloneElement(triggerElement, triggerProps, null);

        // return the trigger
        if (!this.state.isOpen) {
            return this.makeDropdown(trigger);
        }

        // the drop down is open - show everything
        let all: Array<any> = [];
        all.push(trigger);

        // check how many non-trigger children do we have
        all.push(this.getMenu(children.slice(1)));

        return this.makeDropdown(all);
    }

    getMenu(children: any) {
        if (children.length === 1 && children[0].type === Menu) {
            return React.cloneElement(children[0], {
                show: true,
                position: 'absolute',
                trackOutsideClick: true,
                onOutsideClick: this.closeMenu,
                onClick: this.handleClick,
                onSelect: this.handleSelect
            });
        }

        // this is either not a menu or are multiple elements
        return <div className='position-absolute show'>
            {children}
        </div>;
    }

    makeDropdown(children: any) {
        const css: string = mergeCSS('d-inline-flex', 'drop' + this.props.position, this.props.className);

        return <div className={css}>
            {children}
        </div>;
    }
}
