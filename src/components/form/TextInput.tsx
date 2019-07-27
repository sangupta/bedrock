import * as React from 'react';
import { BaseProps, mergeCSS } from '../../BedrockUtils';

interface TextInputProps extends BaseProps {
    type?: 'text' | 'url' | 'password' | 'email';
    placeholder?: string;
}

export default class TextInput extends React.Component<TextInputProps, any> {

    static defaultProps = {
        type: 'text',
        placeholder: ''
    }

    render() {
        const css: string = mergeCSS('form-control', this.props.className);
        return <input className={css} type={this.props.type} placeholder={this.props.placeholder}></input>;
    }
}
