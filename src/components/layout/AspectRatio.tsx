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

export interface AspectRatioProps extends BaseProps {

    /**
     * The aspect ratio to use when rendering the children.
     */
    ratio: '1x1' | '16x9' | '4x3' | '21x9';
}

/**
 * A simple content component that wraps its children inside
 * a `div` block that is scaled to the given aspect ratio. It
 * is useful when embedding content using `img`, `iframe`, `video`,
 * `embed`, `object` etc. 
 * 
 * @author sangupta
 */
export default class AspectRatio extends React.Component<AspectRatioProps> {

    render(): React.ReactNode {
        const { className, children, ratio, ...rest } = this.props;
        const css: string = buildCss('ratio', 'ratio-' + ratio, className);
        
        return <div className={css} {...rest}>{children}</div>
    }

}
