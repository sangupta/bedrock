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
import { decipherMonacoLanguage } from '../../Utils';

interface MonacoFileViewerProps {
    contents: string;
    language?: string;
    mimeType?: string;
    extension?: string;
    readOnly?: boolean;
    showMiniMap?: boolean
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
        readOnly: true,
        showMiniMap: false
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
        const { contents, readOnly, mimeType, extension, showMiniMap } = this.props;
        const node = this.editorRef.current;
        if (!node) {
            return;
        }

        const language = this.props.language ? this.props.language : decipherMonacoLanguage(extension, mimeType);
        const monaco = (window as any).monaco;
        if (!monaco) {
            return;
        }

        this.editorModel = monaco.editor.createModel(contents || '', language);
        monaco.editor.create(node, {
            model: this.editorModel,
            readOnly: readOnly,
            minimap: {
                enabled: showMiniMap
            }
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
