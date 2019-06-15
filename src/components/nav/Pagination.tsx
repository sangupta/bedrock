import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

interface PaginationProps extends BaseProps {
    ariaLabel?: string;

    /**
     * Size of the pagination bar to render.
     */
    size?: 'large' | 'default' | 'small';
}

/**
 * Useful to display a navigation bar.
 */
export default class Pagination extends React.Component<PaginationProps, any> {

    static defaultProps = {
        ariaLabel: '',
        size: 'default'
    }

    render() {
        let clazz: string = 'pagination';
        if (this.props.size === 'large') {
            clazz += ' pagination-lg'
        }
        if (this.props.size === 'small') {
            clazz += ' pagination-sm'
        }
        return <nav aria-label={this.props.ariaLabel}>
            <ul className={clazz}>
                {this.props.children}
            </ul>
        </nav>;
    }
}
