import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps, Variant } from '../../BedrockUtils';

interface ParaProps extends BaseProps {
    /**
     * Element styling to be applied
     */
    variant?: Variant | 'dark' | 'body' | 'muted' | 'white' | 'black-50' | 'white-50';
}

/**
 * Display a paragraph of text.
 */
export default class Para extends React.Component<ParaProps, NoProps> {

    static defaultProps = {
        variant: 'primary',
        className: ''
    }

    render() {
        const css:string = mergeCSS({
            'text-' : this.props.variant
        }, this.props.className);
        
        const extra:any = getProps(this.props);

        return <p {...extra} className={css}>{this.props.children}</p>;
    }
}
