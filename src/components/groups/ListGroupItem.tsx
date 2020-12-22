import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps, Variant } from './../../BedrockUtils';

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
    variant?: 'default' | Variant;
}

export default class ListGroupItem extends React.Component<ListGroupItemProps, NoProps> {

    static defaultProps = {
        active: false,
        action: false,
        disabled: false,
        variant: 'default'
    }

    render() {
        const Tag: any = this.props.action ? 'a' : 'li';

        const extra:any = getProps(this.props);

        const css: string = mergeCSS('list-group-item', {
            'active': this.props.active,
            'disabled': this.props.disabled,
            'list-group-item-action': this.props.action,
            'list-group-item-': this.props.variant
        }, this.props.className);

        if (this.props.action) {
            if (this.props.href) {
                extra.href = this.props.href;
            } else {
                extra.href = '#';
            }
        }

        return <Tag {...extra} className={css}>{this.props.children}</Tag>;
    }
}
