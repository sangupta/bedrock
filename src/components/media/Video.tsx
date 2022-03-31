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
import { buildCss } from '../../Utils';

/**
 * Props for the component.
 */
interface VideoProps extends BaseProps {
    autoPlay?: boolean;
    autoPip?: true;
    controls?: boolean;
    controlsList?: 'nodownload' | 'nofullscreen' | 'noremoteplayback';

    disablePip?: boolean;
    disableRemotePlayback?: boolean;

    loop?: boolean;
    muted?: boolean;

    width?: number;
    height?: number;
    preload?: 'none' | 'metadata' | 'auto';

    src: string;
    poster?: string;
    playsInline?: boolean;

    isResponsive?: boolean;
}

/**
 * The `video` HTML component.
 * 
 * @author sangupta
 */
export default class Video extends React.PureComponent<VideoProps> {

    static defaultProps = {
        autoPlay: false,
        autoPip: false,
        controls: true,
        controlsList: '',
        disablePip: false,
        disableRemotePlayback: false,
        loop: false,
        muted: false,
        preload: 'metadata',
        playsInline: true
    }

    render(): React.ReactNode {
        const {
            isResponsive,

            className, children, ...extraProps
        } = this.props;

        const css = buildCss({
            'embed-responsive-item': isResponsive
        })

        return <video className={css} {...extraProps}>{children}</video>
    }
}
