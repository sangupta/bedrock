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

export interface FigureProps extends BaseProps {
    responsive?: boolean;
    rounded?: boolean;
    imgSrc: string;
    alt?: string;
    captionClass?: string;
    role?: string;
}

export default class Figure extends React.Component<FigureProps> {

    static defaultProps = {
        role: 'img'
    }

    render() {
        const { children, className, responsive, rounded, imgSrc, alt, captionClass, role } = this.props;

        const css: string = buildCss('figure', className);
        const imgCss: string = buildCss('figure-img', {
            'img-fluid': responsive,
            'rounded': rounded
        });
        const captionCss: string = buildCss('figure-caption', captionClass)

        return <figure className={css}>
            <img src={imgSrc} className={imgCss} alt={alt} role={role} />
            <figcaption className={captionCss}>{children}</figcaption>
        </figure>
    }

}
