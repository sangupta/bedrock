import * as React from 'react';
import { BaseProps, mergeCSS, NoProps } from '../../BedrockUtils';

interface MenuItemProps extends BaseProps {
    /**
     * Is the list item active?
     */
    active?: boolean;

    /**
     * Is the list item disabled?
     */
    disabled?: boolean;

    /**
     * Value to be passed back to the `onSelect` handler when
     * the item is clicked
     */
    value?: any;

    /**
     * Click handler to be invoked when the menu item is clicked
     */
    onClick?: (e: React.MouseEvent, eventID: string) => void;

    onSelect?: (value: any, eventID: string) => void;
}

export default class MenuItem extends React.Component<MenuItemProps, NoProps> {

    static defaultProps = {
        active: false,
        disabled: false
    }

    handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (this.props.onClick) {
            this.props.onClick(e, this.props.eventID);
        }

        if (this.props.onSelect) {
            this.props.onSelect(this.props.value, this.props.eventID);
        }

        return false;
    }

    render() {
        const css: string = mergeCSS('dropdown-item', {
            active: this.props.active,
            disabled: this.props.disabled
        }, this.props.className);

        return <a href='#' className={css} onClick={this.handleClick}>{this.props.children}</a>
    }

}
