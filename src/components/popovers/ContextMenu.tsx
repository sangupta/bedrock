import * as React from 'react';
import { BaseProps, NoProps } from './../../BedrockUtils';
import Popper from './../utils/Popper';
import Button from './../buttons/Button';
import Menu from './Menu';

interface ContextMenuProps extends BaseProps {
    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    /**
     * Size of the button
     */
    size?: 'large' | 'small' | 'default';

    /**
     * Where to place the popped-up menu
     */
    direction?: 'top' | 'top-left' | 'top-right' | 'left' | 'left-top' | 'left-bottom' | 'bottom' | 'bottom-left' | 'bottom-right' | 'right' | 'right-top' | 'right-bottom';
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
            <Menu>
                {this.props.children}
            </Menu>
        </Popper>;
    }

}
