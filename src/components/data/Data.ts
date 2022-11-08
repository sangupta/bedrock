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
    attributeName: string;

    title: string;

    formatAs?: DataColumnType;

    valueType?: ValueType;

    displayColumn?: (item: any) => boolean;

    className?: string;

    getValue?: (item: any) => any;
}

