import * as React from 'react';

interface FigureProps {
    caption?: string;
    align?: 'left' | 'right'
}

export default class Figure extends React.Component<FigureProps, any> {

    static defaultProps = {
        align: 'left'
    }

    render() {
        let clazz: string = '';
        if ('right' === this.props.align) {
            clazz = ' text-right';
        }
        return <figure className="figure">
            {this.props.children}
            <figcaption className={'figure-caption' + clazz}>{this.props.caption}</figcaption>
        </figure>;
    }

}
