import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface TagProps extends BaseProps {
    /**
     * Show the cross button to close the tag
     */
    closeable?: boolean;

    disabled?: boolean;

    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

    onClose: React.MouseEventHandler;
}

export default class Tag extends React.Component<TagProps, any> {

    static defaultProps = {
        variant: 'primary',
        disabled: false,
        closeable: false
    }

    getCloseButton = () => {
        if(!this.props.closeable) {
            return null;
        }

        return <span aria-hidden="true" className='cursor-pointer' onClick={this.props.onClose}>&times;</span>;
    }

    render() {
        const css: string = mergeCSS('bedrock-tag', {
            'text-': this.props.variant,
            'border-': this.props.variant
        }, this.props.className);

        const extra:any = getProps(this.props);

        return <div {...extra} className={css}>
            {this.props.children}
            {this.getCloseButton()}
        </div>;
    }

}
