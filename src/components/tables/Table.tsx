import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface TableProps extends BaseProps {
    /**
     * Whether to alternate color the rows
     */
    isStriped?: boolean;

    /**
     * Whether to use dark mode for the table
     */
    isDark?: boolean;

    /**
     * Whether the table has borders or not. 
     */
    isBordered?: boolean;

    /**
     * Whether the table is borderless or not
     */
    isBorderless?: boolean;

    /**
     * Whether the table is responsive across all break points. If set
     * will show horizontal scroll bar if the table does not fit in.
     */
    isResponsive?: boolean;

    /**
     * Allow body rows to show hover effect when mouse rolls over them
     */
    allowHover?: boolean;

    /**
     * Caption if any to use for the table
     */
    caption?: string;
}

export default class Table extends React.Component<TableProps, any> {

    static defaultProps = {
        isStriped: false,
        isDark: false,
        isBordered: false,
        isBorderless: false,
        allowHover: false
    }

    render() {
        const css: string = mergeCSS('table', {
            'table-striped': this.props.isStriped,
            'table-dark': this.props.isDark,
            'table-bordered': this.props.isBordered,
            'table-borderless': this.props.isBorderless,
            'table-hover': this.props.allowHover,
            'table-responsive': this.props.isResponsive
        }, this.props.className);

        const extra:any = getProps(this.props);

        return <table {...extra} className={css}>
            {this.props.children}
        </table>;
    }

}

