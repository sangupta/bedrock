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

    /**
     * Is the field required?
     */
    required?: boolean;

    /**
     * Whether to auto-focus the field
     */
    autoFocus?: boolean;

    /**
     * Current value of the input field
     */
    value?: string;

    disabled?: boolean;

    readOnly?: boolean;
}

interface TextInputState {
    value: string;
}

export default class TextInput extends React.Component<TextInputProps, TextInputState> {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value || ''
        };
    }

    static defaultProps = {
        type: 'text',
        placeholder: '',
        autoFocus: false,
        required: false,
        disabled: false,
        readOnly: false
    }

    handleChange = (e) => {
        this.setState({ value : e.target.value });

        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        const css: string = mergeCSS('form-control', this.props.className);
        const extra: any = getProps(this.props, ['name']);

        if (this.props.required) {
            extra.required = 'required';
        }

        if (this.props.autoFocus) {
            extra.autoFocus = 'autoFocus';
        }

        if (this.props.disabled) {
            extra.disabled = 'disabled';
        }

        if (this.props.readOnly) {
            extra.readOnly = 'readonly';
        }

        return <input {...extra} className={css} type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.state.value}
            onChange={this.handleChange} />;
    }
}
