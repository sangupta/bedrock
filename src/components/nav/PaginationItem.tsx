import * as React from 'react';
import { BaseProps, getProps, NoProps } from './../../BedrockUtils';

interface PaginationItemProps extends BaseProps {
    /**
     * Is the pagination item active?
     */
    active?: boolean;

    /**
     * Is the pagination item disabled?
     */
    disabled?: boolean;

    /**
     * The HREF link to use for the pagination item link
     */
    href?: string;

    /**
     * Method to call when the pagination tiem link is clicked
     */
    onClick?: React.MouseEventHandler<any>;
}

/**
 * Specifies one item in the pagination list.
 */
export default class PaginationItem extends React.Component<PaginationItemProps, NoProps> {

    static defaultProps = {
        active: false,
        disabled: false,
        href: '#'
    }

    render() {
        let clazz: string = 'page-item';
        if (this.props.active) {
            clazz += ' active';
        }
        if (this.props.disabled) {
            clazz += ' disabled';
        }

        const extra:any = getProps(this.props);

        return <li {...extra} className={clazz} aria-current='page'>
            <a className='page-link' href={this.props.href} onClick={this.props.onClick}>{this.props.children}</a>
        </li>;
    }
}
