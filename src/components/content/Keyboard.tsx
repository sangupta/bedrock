import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface KeyboardProps extends BaseProps {
    value: string;
    variant?: 'light' | 'dark';
}

export default class Keyboard extends React.Component<KeyboardProps, any> {

    static defaultProps = {
        value: '',
        variant: 'dark'
    }

    render() {
        const extra:any = getProps(this.props);
        
        return <kbd {...extra} className={mergeCSS({ 'kbd-': this.props.variant }, this.props.className)}>
            {this.props.value}
        </kbd>;
    }
}
