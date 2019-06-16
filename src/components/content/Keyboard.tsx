import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

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
        return <kbd className={mergeCSS({ 'kbd-': this.props.variant }, this.props.className)}>
            {this.props.value}
        </kbd>;
    }
}
