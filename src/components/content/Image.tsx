import * as React from 'react';

interface ImageProps {
    fluid?: boolean;
    thumbnail?: boolean;
    rounded?: boolean;
    src: string;
}

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
