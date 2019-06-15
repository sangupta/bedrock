import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface BreadcrumbItemProps extends BaseProps {
    active?: boolean;

    /**
     * Method to call when the breadcrumb link is clicked
     */
    onClick?: React.MouseEventHandler<any>;
}

/**
 * Specifies one item in the breadcrumb list.
 */
export default class BreadcrumbItem extends React.Component<BreadcrumbItemProps, any> {

    static defaultProps = {
        active: false
    }

    render() {
        let clazz: string = 'breadcrumb-item';
        if (this.props.active) {
            clazz += ' active';
        }

        let children = this.props.children;
        if (!this.props.active) {
            children = <a href='#' onClick={this.props.onClick}>{this.props.children}</a>;
        }

        return <li className={clazz} aria-current='page'>
            {children}
        </li>;
    }
}
