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
import { DataColumnFormat } from '../../components/data/Data';
import DataTable from '../../components/data/DataTable';

export type HttpHeaders = { [key: string]: (string | number) };

export interface HttpRequest {
    url: string;
    method: string;
    headers: HttpHeaders;
    body?: ArrayBuffer;
}

export interface HttpResponse {
    status: number;
    mime?: string;
    size: number;
    headers: HttpHeaders;
    body?: ArrayBuffer;
}

export interface HttpCallTiming {

}

export interface HttpCall {
    id?: string;
    duration?: number;

    request: HttpRequest;
    response?: HttpResponse;

    timing?: HttpCallTiming;
}

const COLUMNS: Array<DataColumnFormat> = [
    { title: 'Name', getValue: function (row) { return row?.request?.url } },
    { title: 'Method', getValue: function (row) { return row?.request?.method } },
    { title: 'Status', getValue: function (row) { return row?.response?.status } },
    { title: 'Type/MIME', getValue: function (row) { return row?.response?.mime } },
    { title: 'Size', getValue: function (row) { return row?.response?.size } },
    { attributeName: 'duration', title: 'Time' }
];

export interface HttpRequestViewerProps {
    calls: Array<HttpCall>
}

/**
 * A simple HTTP network view similar to one in Google Chrome network tab
 * 
 * @author sangupta
 */
export default class HttpRequestViewer extends React.Component<HttpRequestViewerProps> {

    render() {
        const { calls } = this.props;
        return <DataTable
            columns={COLUMNS}
            data={calls as any[]}
            rowKeyAttribute='id'
        />
    }

}
