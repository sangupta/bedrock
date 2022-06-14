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

interface MonacoFileViewerProps {
    contents: string;
    language: string;
    readOnly?: boolean;
}

/**
 * Component that renders the file contents inside a Monaco editor
 * instance. Refer to https://microsoft.github.io/monaco-editor/ for
 * more details on the Monaco editor. This component expects
 * the Monaco editor JS to be available. Hence, you must include/load 
 * the Monaco library externally on the page. 
 */
export default class MonacoFileViewer extends React.Component<MonacoFileViewerProps> {

    /**
     * Set default properties.
     */
    static defaultProps = {
        readOnly: true
    };

    /**
     * The underlying DIV element used to create an editor instance
     */
    editorRef: React.RefObject<HTMLDivElement>;

    /**
     * The model created for the contents supplied
     */
    editorModel: any;

    /**
     * Constructor
     * 
     * @param props 
     */
    constructor(props: MonacoFileViewerProps) {
        super(props);

        this.editorRef = React.createRef();
    }

    /**
     * Create editor instance once the wrapper DIV has mounted.
     * 
     * @returns
     */
    componentDidMount(): void {
        const { contents, language, readOnly } = this.props;
        const node = this.editorRef.current;
        if (!node) {
            return;
        }

        const monaco = (window as any).monaco;
        if (!monaco) {
            return;
        }

        this.editorModel = monaco.editor.createModel(contents || '', language);
        monaco.editor.create(node, {
            model: this.editorModel,
            readOnly: readOnly
        });
    }

    componentWillUnmount() {
        const monaco = (window as any).monaco;
        if (!monaco) {
            return;
        }

        // dispose of the model
        this.editorModel?.dispose();
    }

    render(): React.ReactNode {
        return <div className='monaco-file-viewer w-100 h-100' ref={this.editorRef} />
    }

}
