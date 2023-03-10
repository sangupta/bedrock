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

export interface CarouselProps extends BaseProps {

    /**
     * Whether to display control arrows or not.
     */
    showControls?: boolean;

    /**
     * Whether to display indicators or not.
     */
    showIndicators?: boolean;

    /**
     * Defines the zero-based index of the slide that
     * should be active
     */
    active?: number;

    /**
     * If set to a positive interval, entries will automatically
     * update in the given time (read in millisecond).
     */
    interval?: number;

    /**
     * Whether to display first item after the last item
     * has been displayed
     */
    wrap?: boolean;

    /**
     * Text to display for previous button in screen readers
     * or as a tooltip. Will be used only when `showControls`
     * is set to `true`.
     */
    previousButtonText?: string;

    /**
     * Text to display for next button in screen readers
     * or as a tooltip. Will be used only when `showControls`
     * is set to `true`.
     */
    nextButtonText?: string;

}

interface CarouselState {
    current: number;
    numChildren: number;
}

export default class Carousel extends React.Component<CarouselProps, CarouselState> {

    static defaultProps: CarouselProps = {
        showControls: true,
        showIndicators: false,
        active: 0,
        interval: 0,
        wrap: false,
        previousButtonText: 'Previous',
        nextButtonText: 'Next'
    }

    intervalID: number;

    constructor(props) {
        super(props);

        let { active, children } = this.props;
        const max = React.Children.count(children);

        this.state = {
            numChildren: max,
            current: this.getSlideIndex(active, max)
        }
    }

    componentDidMount(): void {
        const { interval } = this.props;
        if (interval > 0) {
            this.intervalID = setInterval(this.showNext, interval);
        }
    }

    componentWillUnmount(): void {
        clearInterval(this.intervalID);
    }

    getSlideIndex = (index: number, max: number): number => {
        const { wrap } = this.props;

        if (index < 0) {
            return wrap ? max - 1 : 0;
        }

        if (index >= max) {
            return wrap ? 0 : max - 1;
        }

        return index;
    }

    showPrevious = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const { current, numChildren } = this.state;
        this.setState({ current: this.getSlideIndex(current - 1, numChildren) });
    }

    showNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        const { current, numChildren } = this.state;
        this.setState({ current: this.getSlideIndex(current + 1, numChildren) });
    }

    renderIndicators = (show: boolean) => {
        if (!show) {
            return null;
        }

        const { current, numChildren } = this.state;

        const kids = [];
        for (let index = 0; index < numChildren; index++) {
            kids.push(<li data-slide-to={index} className={current === index ? 'active' : ''}></li>)
        }

        return <ol className="carousel-indicators">
            {kids}
        </ol>
    }

    renderControls = (show: boolean) => {
        if (!show) {
            return null;
        }

        const {
            previousButtonText,
            nextButtonText
        } = this.props;

        return <>
            <a className="carousel-control-prev" href="#" role="button" data-slide="prev" onClick={this.showPrevious}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">{previousButtonText}</span>
            </a>
            <a className="carousel-control-next" href="#" role="button" data-slide="next" onClick={this.showNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">{nextButtonText}</span>
            </a>
        </>
    }

    render() {
        const {
            showControls,
            showIndicators,
            children,
            className,
        } = this.props;

        const { current } = this.state;
        const kids = React.Children.toArray(children);

        const css = buildCss('carousel', 'slide', className);
        return <div className={css} >
            {this.renderIndicators(showIndicators)}
            <div key={'kids-' + current} className="carousel-item active">
                {kids[current]}
            </div>

            {this.renderControls(showControls)}
        </div >
    }

}
