import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from '../../BedrockUtils';

interface TextInputProps extends BaseProps {
    /**
     * The type of the text input that needs to be rendered
     */
    type?: 'text' | 'url' | 'password' | 'email';

    /**
     * The placeholder string to use, if any
     */
    placeholder?: string;

    /**
     * The attribute name to use
     */
    name?: string;

    /**
     * Handler fired when the value changes
     */
    onChange?: Function;

    required?: boolean;

    autoFocus?: boolean;
}

export default class TextInput extends React.Component<TextInputProps, any> {

    static defaultProps = {
        type: 'text',
        placeholder: '',
        autoFocus: false,
        required: false
    }

    handleChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        const css: string = mergeCSS('form-control', this.props.className);
        const extra: any = getProps(this.props, ['name']);

        if(this.props.required) {
            extra.required = 'required';
        }

        if(this.props.autoFocus) {
            extra.autoFocus = 'autoFocus';
        }

        return <input {...extra} className={css} type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={this.handleChange} />;
    }
}
