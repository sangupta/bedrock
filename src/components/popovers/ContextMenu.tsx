import * as React from 'react';
import { BaseProps, NoProps, Variant } from './../../BedrockUtils';
import Popper from './../utils/Popper';
import Button from './../buttons/Button';
import Menu from './Menu';

interface ContextMenuProps extends BaseProps {
    /**
     * Element styling to be applied
     */
    variant?: Variant;

    /**
     * Size of the button
     */
    size?: 'large' | 'small' | 'default';

    /**
     * Where to place the popped-up menu
     */
    direction?: 'top' | 'top-left' | 'top-right' | 'left' | 'left-top' | 'left-bottom' | 'bottom' | 'bottom-left' | 'bottom-right' | 'right' | 'right-top' | 'right-bottom';

    /**
     * `React.MouseEventHandler` called when menu or its child
     * is clicked
     */
    onClick?: (e: React.MouseEvent, eventID: string) => void;

    /**
     * Handler called when a menu item is selected inside.
     */
    onSelect?: (selected: any, eventID: string) => void;
}

export default class ContextMenu extends React.Component<ContextMenuProps, NoProps> {

    static defaultProps = {
        variant: 'primary',
        size: 'default',
        direction: 'right-top'
    }

    render() {
        return <Popper direction={this.props.direction}>
            <Button icon='fas fa-ellipsis-v' variant={this.props.variant} size={this.props.size} />
            <Menu onSelect={this.props.onSelect} onClick={this.props.onClick}>
                {this.props.children}
            </Menu>
        </Popper>;
    }

}
