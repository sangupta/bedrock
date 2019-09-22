import * as React from 'react';
import { mergeCSS, getProps, BaseProps, NoProps } from '../../BedrockUtils';

/**
 * Renders a single carousel item inside a parent `Carousel`
 * component. It is mostly never used independently.
 */
export default class CarouselItem extends React.Component<BaseProps, NoProps> {

    render() {
        const css: string = mergeCSS('carousel-item active', this.props.className);
        const extra = getProps(this.props);

        return <div className={css} {...extra}>
            {this.props.children}
        </div>;
    }

}
