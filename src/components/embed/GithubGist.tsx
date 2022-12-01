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

export interface GithubGistProps {

    /**
     * The gist ID that you want to load.
     */
    id: string;

    /**
     * Used to load a specific file from the gist.
     */
    file?: string;

    /**
     * The base URL to use for github. Defaults to https://gist.github.com
     */
    baseUrl?: string;
}

/**
 * A simple component to render a Gist in an IFRAME.
 * 
 * @author sangupta
 */
export default class GithubGist extends React.Component<GithubGistProps> {

    static defaultProps = {
        baseUrl: 'https://gist.github.com/'
    }

    gistRef: React.RefObject<HTMLIFrameElement> = React.createRef();

    componentDidMount(): void {
        const iframe: HTMLIFrameElement = this.gistRef?.current;
        if (!iframe) {
            return
        }

        const elementID = 'ele-' + crypto.randomUUID();
        iframe.setAttribute('id', elementID);

        const { baseUrl, id, file } = this.props;
        if (!id) {
            return;
        }

        const gistUrl = baseUrl + id + '.js' + (file ? '?file=' + file : '');
        const iframeDoc = iframe.contentDocument;
        const html = `
            <html>
                <head>
                    <script type='text/javascript' src='${gistUrl}'></script>
                </head>
                <body>
                </body>
            </html>
        `;

        iframeDoc.open();
        iframeDoc.writeln(html);
        iframeDoc.close();
    }

    render() {
        return <iframe ref={this.gistRef} className='gist-iframe' data-testid='hello' />
    }

}
