import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface TableProps extends BaseProps {
    /**
     * Whether to alternate color the rows
     */
    striped?: boolean;

    /**
     * Whether to use dark mode for the table
     */
    darkMode?: boolean;

    /**
     * Whether the table has borders or not. 
     */
    bordered?: boolean;

    /**
     * Whether the table is borderless or not
     */
    borderless?: boolean;

    /**
     * Whether the table is responsive across all break points. If set
     * will show horizontal scroll bar if the table does not fit in.
     */
    responsive?: boolean;

    /**
     * Allow body rows to show hover effect when mouse rolls over them
     */
    allowHover?: boolean;

    /**
     * Caption if any to use for the table
     */
    caption?: string;
}

export default class Table extends React.Component<TableProps, NoProps> {

    static defaultProps = {
        striped: false,
        darkMode: false,
        bordered: false,
        borderless: false,
        allowHover: false
    }

    render() {
        const css: string = mergeCSS('table', {
            'table-striped': this.props.striped,
            'table-dark': this.props.darkMode,
            'table-bordered': this.props.bordered,
            'table-borderless': this.props.borderless,
            'table-hover': this.props.allowHover,
            'table-responsive': this.props.responsive
        }, this.props.className);

        const extra:any = getProps(this.props);

        return <table {...extra} className={css}>
            {this.props.children}
        </table>;
    }

}

