import * as React from 'react';
import { BaseProps, mergeCSS, NoProps } from './../../BedrockUtils';

interface MenuProps extends BaseProps {
    /**
     * Whether to display the menu or not. The value is
     * set as default `false` as mostly the menu will be
     * used with some kind of `Dropdown` or `Dropup` component.
     * 
     */
    show?: boolean;

    /**
     * Whether to use HTML `relative` or `absolute` positioning
     * when rendering the menu
     */
    position?: 'relative' | 'absolute';

    /**
     * Event handler called when a click happens outside
     * the component.
     */
    onOutsideClick?: React.MouseEventHandler;

    /**
     * Whether to track click outside of the menu or not
     */
    trackOutsideClick?: boolean;

    /**
     * `React.MouseEventHandler` called when menu or its child
     * is clicked
     */
    onClick?:React.MouseEventHandler;

    /**
     * Handler called when a menu item is selected inside.
     */
    onSelect?: Function;
}

/**
 * Useful to display a menu along side a `Dropdown` or a `Dropup`
 * component.
 */
export default class Menu extends React.Component<MenuProps, NoProps> {

    menuRef: any;

    constructor(props) {
        super(props);

        this.menuRef = React.createRef();
    }

    static defaultProps = {
        show: true,
        position: 'relative',
        trackOutsideClick: false,
        closeOnSelect: true
    }

    componentDidMount() {
        if (this.props.trackOutsideClick) {
            document.addEventListener('click', this.clickHandler);
        }
    }

    componentWillUnmount() {
        if (this.props.trackOutsideClick) {
            document.removeEventListener('click', this.clickHandler);
        }
    }

    clickHandler = (e) => {
        if (!this.props.trackOutsideClick) {
            return;
        }

        const node = this.menuRef.current;
        const isDescendantOfRoot = node && node.contains(e.target);
        if (isDescendantOfRoot) {
            return;
        }

        if (this.props.onOutsideClick) {
            this.props.onOutsideClick(e);
        }
    }

    getMenuChildren = () => {
        const children = this.props.children;
        return React.Children.map(children, (child: any, index) => {
            const updatedProps = {
                onClick: this.handleClick,
                onSelect: this.handleSelect
            };

            return React.cloneElement(child, updatedProps);
        });
    }

    handleClick = (e:React.MouseEvent) => {
        if(this.props.onClick) {
            this.props.onClick(e);
        }
    }

    handleSelect = (selectedValue) => {
        if (this.props.onSelect) {
            this.props.onSelect(selectedValue);
        }

        return false;
    }

    render() {
        const css: string = mergeCSS('dropdown-menu', {
            show: this.props.show,
            'position-relative': this.props.position === 'relative'
        }, this.props.className);

        return <div ref={this.menuRef} className={css} aria-labelledby="dropdownMenuButton">
            {this.getMenuChildren()}
        </div>;
    }

}
