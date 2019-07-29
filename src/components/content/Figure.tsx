import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface FigureProps extends BaseProps {
    /**
     * The caption to display along with the figure
     */
    caption?: string;

    /**
     * Alignment of the caption with respect to figure.
     */
    align?: 'left' | 'right'
}

export default class Figure extends React.Component<FigureProps, any> {

    static defaultProps = {
        align: 'left'
    }

    render() {
        const css: string = mergeCSS('figure', this.props.className);
        const childCSS = mergeCSS('figure-caption', {
            'text-right': this.props.align === 'right'
        });
        const extra:any = getProps(this.props);
        
        return <figure {...extra} className={css}>
            {this.props.children}
            <figcaption className={childCSS}>{this.props.caption}</figcaption>
        </figure>;
    }

}
