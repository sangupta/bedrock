import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface TextAreaProps extends BaseProps {
    /**
     * Whether the text-area is disabled or not
     */
    disabled?: boolean;

    /**
     * Whether the text-area is read only or not
     */
    readOnly?: boolean;

    /**
     * The attribute name to use
     */
    name?: string;

    required?: boolean;

    /**
     * The placeholder string to use, if any
     */
    placeholder?: string;

    /**
     * the number of rows to show
     */
    rows?: number;

    /**
     * Handler fired when the value changes for the text area
     */
    onChange?: Function;

    /**
     * The current value of the text-area
     */
    value?: string;
}

export default class TextArea extends React.Component<TextAreaProps, any> {

    static defaultProps = {
        disabled: false,
        readOnly: false,
        required: false,
        placeholder: '',
        value: ''
    }

    handleChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        const css: string = mergeCSS('form-control', this.props.className);
        const extra: any = getProps(this.props, ['rows', 'placeholder', 'name']);

        if (this.props.readOnly) {
            extra.readOnly = 'readonly';
        }
        if (this.props.required) {
            extra.required = 'required';
        }
        if (this.props.disabled) {
            extra.disabled = 'disabled';
        }

        return <textarea className={css} {...extra} onChange={this.handleChange} value={this.props.value || this.props.children}></textarea>;
    }
}
