import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface PaginationProps extends BaseProps {
    ariaLabel?: string;

    /**
     * Size of the pagination bar to render.
     */
    size?: 'large' | 'default' | 'small';

    /**
     * CSS classes to be applied to parent `nav` element.
     * This is different from other components as the default
     * `className` attribute applies to actual `ul` element.
     */
    navCSS?: string;
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
        const css: string = mergeCSS('pagination', {
            'pagination-lg': this.props.size === 'large',
            'pagination-sm': this.props.size === 'small'
        }, this.props.className);

        return <nav aria-label={this.props.ariaLabel} className={this.props.navCSS}>
            <ul className={css}>
                {this.props.children}
            </ul>
        </nav>;
    }
}
