import * as React from 'react';
import { BaseProps } from './../../BedrockUtils';

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
        let clazz: string = '';
        if (this.props.fluid) {
            clazz += ' img-fluid';
        }
        if (this.props.rounded) {
            clazz += 'rounded';
        }
        if (this.props.thumbnail) {
            clazz += 'img-thumbnail';
        }
        return <img className={clazz} src={this.props.src} />;
    }

}
