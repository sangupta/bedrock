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
}

/**
 * Used to display images.
 */
export default class Image extends React.Component<ImageProps, any> {

    static defaultProps = {
        fluid: false,
        thumbnail: false,
        rounded: false
    }

    render() {
        const css: string = mergeCSS({
            'img-fluid': this.props.fluid,
            'rounded': this.props.rounded,
            'img-thumbnail': this.props.thumbnail
        }, this.props.className);
        
        const extra:any = getProps(this.props);
        
        return <img {...extra} className={css} src={this.props.src} />;
    }

}
