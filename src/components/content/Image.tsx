import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface ImageProps extends BaseProps {
    /**
     * `true` if you need the image to be responsive.
     */
    fluid?: boolean;

    /**
     * `true` if you want the image to appear as a thumbnail.
     */
    thumbnail?: boolean;

    /**
     * `true` if you need the image corners to be rounded.
     */
    rounded?: boolean;

    /**
     * URL from which the image should be loaded
     */
    src: string;

    /**
     * Alternate text to use on image
     */
    altText?: string;

    /**
     * Function handler called when the image is clicked
     */
    onClick?: (e: React.MouseEvent, eventID: string) => void;

    width?: number | string;

    height?: number | string;
}

/**
 * Used to display images. Supports the `fluid`, `rounded`, or the `thumbnail` variants.
 * 
 */
export default class Image extends React.Component<ImageProps, any> {

    static defaultProps = {
        fluid: false,
        thumbnail: false,
        rounded: false,
        altText: '',
        width: '',
        height: ''
    }

    handleClick = (e: React.MouseEvent) => {
        if (this.props.onClick) {
            this.props.onClick(e, this.props.eventID);
        }
    }

    render() {
        const css: string = mergeCSS({
            'img-fluid': this.props.fluid,
            'img-rounded': this.props.rounded,
            'img-thumbnail': this.props.thumbnail
        }, this.props.className);

        const extra: any = getProps(this.props, ['width', 'height']);
        if (this.props.altText) {
            extra.alt = this.props.altText;
        }

        return <img {...extra} className={css} src={this.props.src} onClick={this.handleClick} />;
    }

}
