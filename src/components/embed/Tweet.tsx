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

interface QueuePayload {
    id: string;
    element?: HTMLDivElement;
    options: any;
}

export interface TweetProps {
    sdkUrl?: string;
    id: string;
    options?: any;
}

/**
 * A simple component to use Twitter's embed API.
 * 
 * @author sangupta
 */
export default class Tweet extends React.Component<TweetProps> {

    static queue: Array<QueuePayload> = [];

    tweetRef = React.createRef<HTMLDivElement>();

    static defaultProps = {
        sdkUrl: 'https://platform.twitter.com/widgets.js'
    }

    renderTweet(twttr: any, id: string, element: HTMLDivElement, options: any) {
        if (!twttr || !element) {
            return;
        }

        twttr.widgets.createTweetEmbed(id, element, options)
    }

    componentDidMount(): void {
        const { id: tweetID, options = {}, sdkUrl } = this.props;
        const twttr = (window as any).twttr;
        if (twttr) {
            this.renderTweet(twttr, tweetID, this.tweetRef.current, options);
            return;
        }

        const queue = Tweet.queue;
        if (queue.length === 0) {
            const script = document.createElement('script')
            script.setAttribute('src', sdkUrl)
            // When this script loads, the twitter API will be at `window.twttr`
            script.onload = () => {
                queue.forEach(payload => {
                    this.renderTweet((window as any).twttr, payload.id, payload.element, payload.options);
                });
            }

            // load the script
            document.body.appendChild(script);
        }

        queue.push({ id: tweetID, element: this.tweetRef.current, options: options });
    }

    render() {
        return <div className='embedded-tweet' ref={this.tweetRef} />
    }

}
