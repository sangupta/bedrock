import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';
import CarouselItem from './CarouselItem';

interface CarouselProps extends BaseProps {

    /**
     * Whether to display controls or not
     */
    showControls?: boolean;

    /**
     * Whether to display the indicators or not
     */
    showIndicators?: boolean;

    /**
     * The slide to select by default
     */
    selected?: number;
}

interface CarouselState {
    /**
     * The currently selected slide
     */
    currentSlide: number;

    /**
     * Total number of slides
     */
    numSlides: number;
}

export default class Carousel extends React.Component<CarouselProps, CarouselState> {

    static defaultProps = {
        showControls: true,
        showIndicators: true,
        selected: 0
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            currentSlide: props.selected,
            numSlides: React.Children.count(props.children)
        }
    }

    getControls = () => {
        if (!this.props.showControls) {
            return null;
        }

        return <React.Fragment>
            <a className="carousel-control-prev" role="button" onClick={this.previousSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" role="button">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </React.Fragment>;
    }

    getIndicators = (): any => {
        if (!this.props.showIndicators) {
            return null;
        }

        const length: number = this.state.numSlides;
        if (length === 0) {
            return null;
        }

        const result = [];

        for (let index = 0; index < length; index++) {
            result.push(<li key={'carousel-key-' + index} className={index === this.state.currentSlide ? 'active' : ''} onClick={() => this.changeSlide(index)}></li>);
        }

        return <ol className="carousel-indicators">
            {result}
        </ol>;
    }

    changeSlide = (index: number): void => {
        this.setState({
            currentSlide: index
        });
    }

    previousSlide = (): void => {
        let slide: number = this.state.currentSlide - 1;
        if (slide < 0) {
            slide = this.state.numSlides - 1;
        }

        this.changeSlide(slide);
    }

    nextSlide = (): void => {
        let slide: number = this.state.currentSlide + 1;
        if (slide >= this.state.numSlides) {
            slide = 0;
        }

        this.changeSlide(slide);
    }

    render() {
        const css: string = mergeCSS('carousel slide', this.props.className);
        const extra = getProps(this.props);

        const children: Array<any> = React.Children.toArray(this.props.children);
        for (let index = 0; index < children.length; index++) {
            let item = children[index];

            if (item.type !== CarouselItem) {
                throw new Error('Carousel children must be of type CarouselItem');
            }
        }

        return <div {...extra} class={css}>
            {this.getIndicators()}
            <div className="carousel-inner">
                {children[this.state.currentSlide]}
            </div>
            {this.getControls()}
        </div>;
    }

}
