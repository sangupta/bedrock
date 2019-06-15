import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface ListGroupItemProps extends BaseProps {
    active?: boolean;
    disabled?: boolean;

    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export default class ListGroupItem extends React.Component<ListGroupItemProps, any> {

    static defaultProps = {
        active: false,
        disabled: false,
        variant: ''
    }

    render() {
        let clazz = 'list-group-item';
        if (this.props.active) {
            clazz += ' active';
        }
        if (this.props.disabled) {
            clazz += ' disabled';
        }
        if (this.props.variant) {
            clazz += ' list-group-item-' + this.props.variant;
        }

        return <li className={clazz}>{this.props.children}</li>;
    }
}
