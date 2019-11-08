import * as React from 'react';
import { mergeCSS, getProps, BaseProps } from './../../BedrockUtils';
import Image from './Image';

interface MediaProps extends BaseProps {
    /**
     * The source URL for the media image
     */
    imageSrc?: string;

    /**
     * The alt text for the image
     */
    imageAlt?: string;

    /**
     * The title for the media container
     */
    title?: string;

    /**
     * Content for the media container
     */
    content?: string;

    /**
     * Function handler called when the media image is clicked
     */
    onMediaClick?: (e: React.MouseEvent, eventID: string) => void;

    /**
     * Function handler called when the title is clicked
     */
    onTitleClick?: (e: React.MouseEvent, eventID: string) => void;
}

/**
 * Component to display media objects. Refer https://getbootstrap.com/docs/4.3/components/media-object/
 * for more details.
 * 
 * The component can make use of `props` to render the basic elements, and use `children` along with to
 * display nested media objects. However, if only `children` are used to render the media object, than
 * the nesting has to be done by the callee.
 */
export default class Media extends React.Component<MediaProps, any> {

    handleImageClick = (e: React.MouseEvent) => {
        if (this.props.onMediaClick) {
            this.props.onMediaClick(e, this.props.eventID);
        }
    }

    handleTitleClick = (e: React.MouseEvent) => {
        if (this.props.onTitleClick) {
            this.props.onTitleClick(e, this.props.eventID);
        }
    }

    render() {
        const css: string = mergeCSS('media', this.props.className);
        const extra: any = getProps(this.props);

        let kids: any;

        // we are rendering using props
        if (this.props.imageSrc || this.props.title || this.props.content) {
            kids = this.renderUsingProps(css, extra);
        } else {
            kids = this.props.children;
        }

        // we are rendering using only children
        return <div {...extra} className={css}>
            {kids}
        </div>;
    }

    renderUsingProps(css: string, extra: any): Array<any> {
        const kids: Array<any> = [];
        if (this.props.imageSrc) {
            kids.push(<Image className='mr-3' src={this.props.imageSrc} altText={this.props.imageAlt} onClick={this.handleImageClick} />);
        }

        let bodyKids: Array<any> = [];
        if (this.props.title) {
            bodyKids.push(<h5 className="mt-0" onClick={this.handleTitleClick}>{this.props.title}</h5>)
        }
        if (this.props.content) {
            bodyKids.push(this.props.content);
        }

        if (this.props.children) {
            const children: Array<any> = React.Children.toArray(this.props.children);
            for (let index = 0; index < children.length; index++) {
                const child = children[index];

                if (child.type !== Media) {
                    // skip this child
                    continue;
                }

                bodyKids.push(React.cloneElement(child, { className: mergeCSS('mt-3', child.props.className) }, child.children));
            }
        }

        // add body
        kids.push(<div className='media-body'>{bodyKids}</div>);

        return kids;
    }

}
