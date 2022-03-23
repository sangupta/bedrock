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
