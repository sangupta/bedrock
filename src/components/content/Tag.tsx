import * as React from 'react';
import { BaseProps, mergeCSS, getProps, Variant } from './../../BedrockUtils';

interface TagProps extends BaseProps {
    /**
     * Show the cross button to close the tag
     */
    closeable?: boolean;

    disabled?: boolean;

    variant?: Variant;

    onClose: (e: React.MouseEvent, eventID: string) => void;
}

export default class Tag extends React.Component<TagProps, any> {

    static defaultProps = {
        variant: 'primary',
        disabled: false,
        closeable: false
    }

    handleClick = (e: React.MouseEvent): void => {
        if (this.props.onClose) {
            this.props.onClose(e, this.props.eventID);
        }
    }

    getCloseButton = () => {
        if (!this.props.closeable) {
            return null;
        }

        return <span aria-hidden="true" className='cursor-pointer' onClick={this.handleClick}>&times;</span>;
    }

    render() {
        const css: string = mergeCSS('bedrock-tag', {
            'text-': this.props.variant,
            'border-': this.props.variant
        }, this.props.className);

        const extra: any = getProps(this.props);

        return <div {...extra} className={css}>
            {this.props.children}
            {this.getCloseButton()}
        </div>;
    }

}
