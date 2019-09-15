import * as React from 'react';
import { mergeCSS, getProps, BaseProps } from './../../BedrockUtils';

export default class CarouselItem extends React.Component<BaseProps, any> {

    render() {
        const css: string = mergeCSS('carousel-item active', this.props.className);
        const extra = getProps(this.props);

        return <div className={css} {...extra}>
            {this.props.children}
        </div>;
    }

}
