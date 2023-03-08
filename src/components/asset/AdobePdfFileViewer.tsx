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
import { BaseProps } from '../../types';

export type AdobePdfEmbedMode = 'fullWindow' | 'sizedContainer' | 'inline' | 'lightbox';

export const EMBED_MODES = {
    fullWindow: 'FULL_WINDOW',
    sizedContainer: 'SIZED_CONTAINER',
    inline: 'IN_LINE',
    lightbox: 'LIGHT_BOX'
};

export interface AdobePdfFileViewerProps extends BaseProps {
    divID: string;
    clientID: string;
    pdfUrl: string;
    fileName: string;

    sdkUrl?: string;
    loadDefaultSDK?: boolean;

    embedMode?: AdobePdfEmbedMode;
    showAnnotationTools?: boolean;
    showDownloadPDF?: boolean;
    showPrintPDF?: boolean;
    showThumbnails?: boolean;
    showBookmarks?: boolean;
    showZoomControl?: boolean;
}

/**
 * An Adobe PDF Embed API based PDF viewer.
 * Refer https://developer.adobe.com/document-services/apis/pdf-embed/ for more details.
 * 
 * @author sangupta
 */
export default class AdobePdfFileViewer extends React.Component<AdobePdfFileViewerProps> {

    static defaultProps = {
        loadDefaultSDK: false,
        embedMode: 'sizedContainer',
        showAnnotationTools: true,
        showDownloadPDF: true,
        showThumbnails: true,
        showBookmarks: true,
        showZoomControl: true,
        showPrintPDF: true
    }

    listenerAdded: boolean = false;

    componentDidMount(): void {
        let { sdkUrl, loadDefaultSDK } = this.props;
        const dc = (window as any).AdobeDC;

        // DC already loaded
        if (dc && dc.View) {
            this.loadPdf();
            return;
        }

        if (loadDefaultSDK) {
            if (!sdkUrl) {
                sdkUrl = 'https://documentservices.adobe.com/view-sdk/viewer.js';
            }
        }

        // not loaded, and not allowed to load
        if (!sdkUrl) {
            console.warn('Adobe PDF Embed library is not loaded');
            return;
        }

        // we can load SDK ourselves
        const script = document.createElement('script');
        script.src = sdkUrl;

        this.listenerAdded = true;
        document.addEventListener('adobe_dc_view_sdk.ready', this.dcReady);
        document.body.appendChild(script);
    }

    componentWillUnmount(): void {
        if (this.listenerAdded) {
            document.removeEventListener('adobe_dc_view_sdk.ready', this.dcReady);
        }
    }

    dcReady = (): void => {
        this.loadPdf();
    }

    loadPdf = (): void => {
        const { clientID, divID, pdfUrl, fileName, embedMode, showAnnotationTools, showDownloadPDF,
            showPrintPDF, showThumbnails, showBookmarks, showZoomControl } = this.props;
        const dc = (window as any).AdobeDC;

        if (!pdfUrl) {
            return;
        }

        const dcHandle = new dc.View({ clientId: clientID, divId: divID });
        dcHandle.previewFile({
            content: {
                location:
                    { url: pdfUrl }
            },
            metaData: {
                fileName: fileName
            }
        }, {
            embedMode: EMBED_MODES[embedMode],
            showAnnotationTools: showAnnotationTools,
            showDownloadPDF: showDownloadPDF,
            showPrintPDF: showPrintPDF,
            showBookmarks: showBookmarks,
            showThumbnails: showThumbnails,
            showZoomControl: showZoomControl
        });
    }

    render() {
        const { divID, className } = this.props;
        return <div id={divID} className={className} />
    }

}
