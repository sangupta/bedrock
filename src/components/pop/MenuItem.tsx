import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface MenuItemProps extends BaseProps {
    /**
     * Is the list item active?
     */
    active?: boolean;

    /**
     * Is the list item disabled?
     */
    disabled?: boolean;
}

export default class MenuItem extends React.Component<MenuItemProps, any> {

    static defaultProps = {
        active: false,
        disabled: false
    }

    render() {
        const css: string = mergeCSS('dropdown-item', {
            active: this.props.active,
            disabled: this.props.disabled
        }, this.props.className);

        return <a href='#' className={css}>{this.props.children}</a>
    }

}
