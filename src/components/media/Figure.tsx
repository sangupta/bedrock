import React from 'react';
import { BaseProps } from '../../types';
import { buildCss } from '../../Utils';

export interface FigureProps extends BaseProps {
    responsive?: boolean;
    rounded?: boolean;
    imgSrc: string;
    alt?: string;
    captionClass?: string;
}

export default class Figure extends React.Component<FigureProps> {

    render() {
        const { children, className, responsive, rounded, imgSrc, alt, captionClass } = this.props;

        const css: string = buildCss('figure', className);
        const imgCss: string = buildCss('figure-img', {
            'img-fluid': responsive,
            'rounded': rounded
        });
        const captionCss: string = buildCss('figure-caption', captionClass)

        return <figure className={css}>
            <img src={imgSrc} className={imgCss} alt={alt} />
            <figcaption className={captionCss}>{children}</figcaption>
        </figure>
    }
    
}
