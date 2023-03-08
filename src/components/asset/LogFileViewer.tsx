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

export interface LogLine {
    lineNumber: number;
    offset: number;
    text: string;
}

export interface LogFileViewerProps {
    logLines: Array<LogLine>;
}

/**
 * A basic log file viewer. It supports display of line numbers besides
 * each line.
 * 
 */
export default class LogFileViewer extends React.Component<LogFileViewerProps> {

    render(): React.ReactNode {
        const { logLines } = this.props;

        if (!logLines) {
            return null;
        }

        const rows: any[] = [];
        logLines.forEach(line => {
            rows.push(<pre>{line.text}</pre>)
        });

        return <div className='log-lines-container'>
            {rows}
        </div>
    }

}
