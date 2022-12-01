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

export interface YoutubeProps {
    id: string;
    title?: string;
    width?: number;
    height?: number;
    baseUrl?: string;
    allowFullScreen?: boolean;
}

/**
 * A simple youtube video embed component.
 * 
 * TODO: Look at https://github.com/paulirish/lite-youtube-embed for
 * better implementation.
 * 
 * @author sangupta
 */
export default class Youtube extends React.Component<YoutubeProps> {

    static defaultProps = {
        baseUrl: 'https://www.youtube.com/embed/',
        allowFullScreen: true,
        width: 560,
        height: 315
    }

    render() {
        const { id, title, width, height, baseUrl, allowFullScreen, ...extraProps } = this.props;
        if (!id) {
            return null;
        }

        const myProps: any = {};
        if (width) {
            myProps.width = width;
        }
        if (height) {
            myProps.height = height;
        }
        if (title) {
            myProps.title = title;
        }
        if (allowFullScreen) {
            myProps.allowFullScreen = { allowFullScreen };
        }

        return <iframe {...myProps} {...extraProps} src={baseUrl + id} />
    }

}
