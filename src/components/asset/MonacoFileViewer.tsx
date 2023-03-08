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

export interface MonacoFileViewerProps {
    /**
     * The contents to display inside
     */
    contents: string;

    /**
     * The language of the contents to syntax highlight in
     */
    language?: string;

    /**
     * The MIME type for the content if known
     */
    mimeType?: string;

    /**
     * The file extension for the content if known
     */
    extension?: string;

    /**
     * Should the content be displayed read-only ?
     */
    readOnly?: boolean;

    /**
     * Whether to show mini map or not?
     */
    showMiniMap?: boolean;

    /**
     * The monaco instance to use
     */
    monacoInstance: any;
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
        const { contents, readOnly, mimeType, extension, showMiniMap, monacoInstance } = this.props;
        if (!monacoInstance) {
            return;
        }

        const node = this.editorRef.current;
        if (!node) {
            return;
        }

        const language = this.props.language ? this.props.language : decipherMonacoLanguage(extension, mimeType);
        this.editorModel = monacoInstance.editor.createModel(contents || '', language);
        monacoInstance.editor.create(node, {
            model: this.editorModel,
            readOnly: readOnly,
            minimap: {
                enabled: showMiniMap
            }
        });
    }

    componentWillUnmount(): void {
        const { monacoInstance } = this.props;
        if (!monacoInstance) {
            return;
        }

        // dispose of the model
        this.editorModel?.dispose();
    }

    render(): React.ReactNode {
        return <div className='monaco-file-viewer w-100 h-100' ref={this.editorRef} />
    }

}
