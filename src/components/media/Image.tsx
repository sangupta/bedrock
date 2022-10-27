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
import { buildCss } from '../../Utils';

/**
 * Props for the component.
 */
interface ImageProps extends BaseProps {
    src: string;

    responsive?: boolean;

    thumbnail?: boolean;

    rounded?: boolean;
}

/**
 * The `img` component.
 * 
 * @author sangupta
 */
export default class Image extends React.PureComponent<ImageProps> {

    render(): React.ReactNode {
        const { responsive, thumbnail, rounded, src, children, className, ...extraProps } = this.props;
        const css = buildCss({
            'img-fluid': responsive,
            'img-thumbnail': thumbnail,
            'rounded': rounded
        }, className);

        return <img src={src} className={css} {...extraProps}>{children}</img>;
    }

}
