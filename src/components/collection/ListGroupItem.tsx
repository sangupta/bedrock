import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface ListGroupItemProps extends BaseProps {
    /**
     * Is the list item active?
     */
    active?: boolean;

    /**
     * Add `action` hover style to list item. This will augment
     * the item to be rendered using an `anchor` tag rather than
     * a `li` HTML tag.
     */
    action?: boolean;

    /**
     * Is the list item disabled?
     */
    disabled?: boolean;

    /**
     * HREF to use if the item is set to `action`
     */
    href?: string;

    /**
     * Element styling to be applied
     */
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export default class ListGroupItem extends React.Component<ListGroupItemProps, any> {

    static defaultProps = {
        active: false,
        action: false,
        disabled: false,
        variant: 'default'
    }

    render() {
        const Tag: any = this.props.action ? 'a' : 'li';

        let extra:any = {};

        let clazz = 'list-group-item';
        if (this.props.active) {
            clazz += ' active';
        }
        if (this.props.disabled) {
            clazz += ' disabled';
        }
        if (this.props.variant && 'default' !== this.props.variant) {
            clazz += ' list-group-item-' + this.props.variant;
        }
        if (this.props.action) {
            clazz += ' list-group-item-action';
            if(this.props.href) {
                extra.href = this.props.href;
            } else {
                extra.href = '#';
            }
        }

        return <Tag {...extra} className={clazz}>{this.props.children}</Tag>;
    }
}
