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

export type DateTimeFormatType = 'date' | 'date-time' | 'time';

export type DataColumnType = 'string' | 'bytes' | 'time-ago' | 'time-ago' | DateTimeFormatType | 'icon';

export type ValueType = '' | 'seconds' | 'millis' | 'string' | 'number' | 'boolean';

export interface DataColumnFormat {
    /**
     * The attribute to read from the data array object
     */
    attributeName?: string;

    /**
     * Title to use for the column
     */
    title: string;

    /**
     * Control how column is displayed
     */
    formatAs?: DataColumnType;

    /**
     * How should the value be treated
     */
    valueType?: ValueType;

    /**
     * Test if the column should be displayed based on the
     * data row object.
     */
    displayColumn?: (item: any) => boolean;

    /**
     * CSS classname to attach
     */
    className?: string;

    /**
     * Function to call with entire data row object
     * that will return the value to render
     */
    getValue?: (item: any) => any;
}

