import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface MenuProps extends BaseProps {
    /**
     * Whether to display the menu or not. The value is
     * set as defauly `false` as mostly the menu will be
     * used with some kind of `Dropdown` or `Dropup` component.
     * 
     */
    show?: boolean;

    position?: 'relative' | 'absolute';
}

/**
 * Useful to display a menu along side a `Dropdown` or a `Dropup`
 * component.
 */
export default class Menu extends React.Component<MenuProps, any> {

    static defaultProps = {
        show: true,
        position: 'relative'
    }

    render() {
        const css: string = mergeCSS('dropdown-menu', {
            show: this.props.show,
            'position-relative': this.props.position === 'relative'
        }, this.props.className);

        return <div className={css} aria-labelledby="dropdownMenuButton">
            {this.props.children}
        </div>;
    }

}
