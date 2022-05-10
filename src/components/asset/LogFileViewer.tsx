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

interface LogLine {
    lineNumber: number;
    offset: number;
    text: string;
}

interface LogFileViewerProps {
    logLines: Array<LogLine>;
}

/**
 * A basic log file viewer.
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
