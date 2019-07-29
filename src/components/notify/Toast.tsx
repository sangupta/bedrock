import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface ToastProps extends BaseProps {

    /**
     * Image source for the icon image in toast header.
     */
    imageSrc?: string;

    /**
     * Alternate text to be shown on the icon image.
     */
    imageAlt?: string;

    /**
     * Title to be shown in toast header.
     */
    title?: string;

    /**
     * Sub-title to be shown in toast header.
     */
    subTitle?: string;

    /**
     * Whether to show the close button or not.
     */
    closeable?: boolean;
}

export default class Toast extends React.Component<ToastProps, any> {

    static defaultProps = {
        imageSrc: '',
        imageAlt: '',
        title: '',
        subTitle: '',
        closeable: true
    }

    getToastHeader = () => {
        let header = [];

        if (this.props.imageSrc) {
            header.push(<img src={this.props.imageSrc} className="rounded mr-2" alt={this.props.imageAlt} />);
        }
        if (this.props.title) {
            header.push(<strong className="mr-auto">{this.props.title}</strong>);
        }
        if (this.props.subTitle) {
            header.push(<small>{this.props.subTitle}</small>);
        }
        if (this.props.closeable) {
            header.push(<button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>);
        }

        if (header.length === 0) {
            return null;
        }

        return <div className="toast-header">{header}</div>;
    }

    render() {
        const css: string = mergeCSS('toast', this.props.className);
        const extra:any = getProps(this.props);
        
        return <div {...extra} className={css} role="alert" aria-live="assertive" aria-atomic="true">
            {this.getToastHeader()}
            <div className="toast-body">
                {this.props.children}
            </div>
        </div>;
    }
}
