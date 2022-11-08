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
import { buildCss } from '../../Utils';

/**
 * Props for the component.
 */
interface VideoProps extends BaseProps {
    autoPlay?: boolean;
    autoPip?: boolean;
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
