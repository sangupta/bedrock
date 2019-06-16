import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface ParaProps extends BaseProps {
    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'body' | 'muted' | 'white' | 'black-50' | 'white-50';
}

/**
 * Display a paragraph of text.
 */
export default class Para extends React.Component<ParaProps, any> {

    static defaultProps = {
        variant: 'primary',
        className: ''
    }

    render() {
        const css:string = mergeCSS({
            'text-' : this.props.variant
        }, this.props.className);
        
        return <p className={css}>{this.props.children}</p>;
    }
}
