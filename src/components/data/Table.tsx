import React from 'react';
import { Variant } from '../../types';
import { buildCss } from '../../Utils';

export interface TRProps {
    variant?: Variant;
    active?: boolean;
}

/**
 * Component for the `<tr>` tag.
 * 
 * @author sangupta
 */
export class TR extends React.Component<TRProps> {

    render() {
        const { variant, children, active } = this.props;
        const css: string = buildCss(variant ? 'table-' + variant : '', {
            'table-active': active
        });
        return <tr className={css}>{children}</tr>
    }

}

export interface TDProps {
    colspan?: string | number;
    variant?: Variant;
    active?: boolean;
}

export class TD extends React.Component<TDProps> {

    static defaultProps = {
        colspan: ''
    }

    render() {
        const { colspan, children, variant, active } = this.props;
        const css: string = buildCss(variant ? 'table-' + variant : '', {
            'table-active': active
        });
        const extra: any = {};
        if (colspan) {
            extra.colspan = colspan;
        }
        return <td className={css} {...extra}>{children}</td>
    }

}

export interface THProps {
    scope?: string;
}

export class TH extends React.Component<THProps> {

    static defaultProps = {
        scope: 'col'
    }

    render() {
        const { scope, children } = this.props;
        return <td scope={scope}>{children}</td>
    }

}

export class THead extends React.Component {

    render() {
        return <thead>{this.props.children}</thead>
    }

}

export class TBody extends React.Component {

    render() {
        return <tbody>{this.props.children}</tbody>
    }

}

export interface TableProps {
    variant?: Variant;
    stripedRows?: boolean;
    stripedColumns?: boolean;
    hoverableRows?: boolean;
    active?: boolean;
    bordered?: boolean;
    borderless?: boolean;
}

export default class Table extends React.Component<TableProps> {

    static defaultProps = {
        variant: '',
        stripedRows: false,
        stripedColumns: false,
        hoverableRows: false,
        active: false,
        bordered: false,
        borderless: false
    }

    render() {
        const { children, variant, stripedRows, stripedColumns, hoverableRows, active, bordered, borderless } = this.props;

        const css: string = buildCss('table', variant ? 'btn-' + variant : '', {
            'table-striped': stripedRows,
            'table-striped-columns': stripedColumns,
            'table-hover': hoverableRows,
            'table-active': active,
            'table-bordered': bordered,
            'table-borderless': borderless
        });

        return <table className={css}>{children}</table>
    }

}
