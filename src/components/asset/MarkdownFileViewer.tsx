import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownFileViewerProps {
    contents?: string;
}

/**
 * A Mozilla PDF.js based PDF viewer.
 * Refer https://github.com/mozilla/pdf.js for more details.
 * 
 * @author sangupta
 */
export default class MarkdownFileViewer extends React.Component<MarkdownFileViewerProps> {

    render() {
        const { contents } = this.props;
        if (!contents) {
            return null;
        }

        return <ReactMarkdown children={contents} />
    }

}
