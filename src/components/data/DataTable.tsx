/**
 *
 * bedrock - UI Component Library
 * Copyright (c) 2020, Sandeep Gupta
 *
 * https://bedrock.sangupta.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 		http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
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
    getIconForItem?: (item: any) => string;

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
 * Component to render a generic table.
 * 
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

        columns.forEach((item, index) => {
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
                <DataTableRow className={this.props.selectedRow === item ? 'selected' : ''} key={itemID || index} dataRow={item} onRowClick={this.props.onRowClick} onRowDoubleClick={this.props.onRowDoubleClick} >
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
                return this.props.getIconForItem(value)
        }

        return value;
    }

    /**
     * Render the data table.
     *
     * @returns 
     */
    render() {
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
interface DataTableRowProps {
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

    render() {
        return <div className={'data-table-row ' + (this.props.className || '')} onClick={this.handleRowClick} onDoubleClick={this.handleRowDoubleClick}>
            {this.props.children}
        </div>
    }

}
