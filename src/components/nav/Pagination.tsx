import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface PaginationProps extends BaseProps {

    ariaLabel?: string;

    /**
     * Horizontal alignment of the pagination
     */
    align?: 'start' | 'center' | 'end';

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
export default class Pagination extends React.Component<PaginationProps, NoProps> {

    static defaultProps = {
        ariaLabel: '',
        size: 'default',
        align: 'start'
    }

    render() {
        const css: string = mergeCSS('pagination', 'justify-content-' + this.props.align, {
            'pagination-lg': this.props.size === 'large',
            'pagination-sm': this.props.size === 'small'
        }, this.props.className);

        const extra: any = getProps(this.props);

        return <nav {...extra} aria-label={this.props.ariaLabel} className={this.props.navCSS}>
            <ul className={css}>
                {this.props.children}
            </ul>
        </nav>;
    }
}
