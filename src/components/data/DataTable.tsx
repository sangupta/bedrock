/**
 * bedrock - UI Component Library
 * https://github.com/sangupta/bedrock
 *
 * MIT License.
 * Copyright (c) 2022, Sandeep Gupta.
 *
 * Use of this source code is governed by a MIT style license
 * that can be found in LICENSE file in the code repository.
 */

import React from 'react';
import TimeAgo from '../content/TimeAgo';
import ByteSize from '../content/ByteSize';
import DateTime from '../content/DateTime';

/**
 * PROP attributes for DataTable component.
 */
interface DataTableProps {
    /**
     * The columns to be displayed in the data table.
     */
    columns: Array<DataColumnFormat>;

    /**
     * The attribute in one object of the `data` array that will
     * be used as the primary key when rendering.
     */
    rowKeyAttribute: string;

    /**
     * The data to be displayed in the table
     */
    data: Array<any>;

    /**
     * Do we need to display the header row?
     */
    hideHeaderRow?: boolean;

    /**
     * When a row is clicked
     */
    onRowClick?: (item: any) => void;

    /**
     * When a row is double clicked
     */
    onRowDoubleClick?: (item: any) => void;

    /**
     * Return the icon for one item/one row
     */
    getIconForItem?: (item: any) => React.ReactNode;

    /**
     * Currently selected item
     */
    selectedRow?: any;
}

/**
 * STATE attributes for DataTable component.
 */
interface DataTableState {

}

/**
 * Component to render a generic data table. Consider this as
 * a replacement to the `table` HTML tag. The data table uses
 * `grid` layout and supports the following features:
 * 
 * * capture click/double-click on data row
 * * can render icons based on attributes
 * * support for data formatting
 * 
 * @author sangupta
 */
export default class DataTable extends React.Component<DataTableProps, DataTableState> {

    /**
     * Render only the heading.
     * 
     * @param columns 
     * @returns 
     */
    renderHeading(columns: Array<DataColumnFormat>) {
        if (!!this.props.hideHeaderRow) {
            return null;
        }

        const result: any = [];

        (columns || []).forEach((item, index) => {
            result.push(
                <div key={item.title} className='data-table-col' style={{ gridColumnStart: index + 1 }}>{item.title}</div>
            );
        });

        return <div className='data-table-row-header'>{result}</div>
    }

    /**
     * Render all data rows.
     * 
     * @param format 
     * @param data 
     * @param rowKeyAttribute 
     * @returns 
     */
    renderData = (format: Array<DataColumnFormat>, data: Array<any>, rowKeyAttribute: string) => {
        const result: any = [];

        data.forEach((item, index) => {
            const itemID = item[rowKeyAttribute];

            result.push(
                <DataTableRow
                    className={this.props.selectedRow === item ? 'selected' : ''}
                    key={itemID || index}
                    dataRow={item}
                    onRowClick={this.props.onRowClick}
                    onRowDoubleClick={this.props.onRowDoubleClick} >
                    {this.renderDataRow(item, format)}
                </DataTableRow>
            );
        })

        return result;
    }

    /**
     * Render a single data row.
     * 
     * @param row 
     * @param formats 
     * @returns 
     */
    renderDataRow(row: any, formats: Array<DataColumnFormat>) {
        const columns: any = [];

        if (!formats || formats.length === 0) {
            return columns;
        }

        formats.forEach((format, index) => {
            let columnValue = format.attributeName !== '$' ? row[format.attributeName] : row;

            // choose formatter based on field type
            if (format.formatAs) {
                columnValue = this.formatValue(format.formatAs, format.valueType || '', columnValue);
            }

            const addOnClass = format.className ? ' ' + format.className : '';
            columns.push(
                <div key={format.title || ('col-' + index)} className={'data-table-col' + addOnClass} style={{ gridColumnStart: (index + 1) }}>
                    {columnValue}
                </div>
            )
        });

        return columns;
    }

    /**
     * Format the column value based on its format and value type.
     * 
     * @param formatAs 
     * @param valueType 
     * @param value 
     * @returns 
     */
    formatValue = (formatAs: DataColumnType, valueType: ValueType, value: any) => {
        if (!formatAs) {
            return value;
        }

        switch (formatAs) {
            case 'string':
                return '' + value;

            case 'bytes':
                return <ByteSize bytes={value} />

            case 'date':
            case 'date-time':
            case 'time':
                return <DateTime value={value} type={formatAs} valueType={valueType} />

            case 'time-ago':
                return <TimeAgo value={value} valueType={valueType} />

            case 'icon':
                return this.props.getIconForItem ? this.props.getIconForItem(value) : ''

            default:
                return value;
        }
    }

    /**
     * Render the data table.
     *
     * @returns 
     */
    render(): React.ReactNode {
        const { data, columns, rowKeyAttribute } = this.props;
        if (!data || data.length == 0) {
            return null;
        }

        return <div className='data-table' role='grid'>
            {this.renderHeading(columns)}
            {this.renderData(columns, data, rowKeyAttribute)}
        </div>
    }

}

/**
 * Prop attributes for DataTableRow component.
 */
interface DataTableRowProps extends BaseProps {
    dataRow: any;
    key: string;
    className?: string;
    onRowClick?: (dataRow: any) => void;
    onRowDoubleClick?: (dataRow: any) => void;
}

/**
 * Represents a row in the data table.
 */
class DataTableRow extends React.Component<DataTableRowProps> {

    handleRowClick = () => {
        if (this.props.onRowClick) {
            this.props.onRowClick(this.props.dataRow);
        }
    }

    handleRowDoubleClick = () => {
        if (this.props.onRowDoubleClick) {
            this.props.onRowDoubleClick(this.props.dataRow);
        }
    }

    render(): React.ReactNode {
        return <div className={'data-table-row ' + (this.props.className || '')} onClick={this.handleRowClick} onDoubleClick={this.handleRowDoubleClick}>
            {this.props.children}
        </div>
    }

}
