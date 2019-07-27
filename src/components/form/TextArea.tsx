import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface TextAreaProps extends BaseProps {
    /**
     * Whether the text-area is disabled or not
     */
    disabled?: boolean;

    /**
     * Whether the text-area is read only or not
     */
    readOnly?: boolean;

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
}

export default class TextArea extends React.Component<TextAreaProps, any> {

    static defaultProps = {
        disabled: false,
        readOnly: false,
        required: false,
        placeholder: ''
    }

    handleChange = (e) => {
        if(this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        const css: string = mergeCSS('form-control', this.props.className);
        const extra: any = {};

        if (this.props.rows > 0) {
            extra.rows = this.props.rows;
        }
        if (this.props.readOnly) {
            extra.readonly = 'readonly';
        }
        if (this.props.required) {
            extra.required = 'required';
        }
        if (this.props.disabled) {
            extra.disabled = 'disabled';
        }
        if (this.props.placeholder) {
            extra.placeholder = this.props.placeholder;
        }

        return <textarea className={css} {...extra} onChange={this.handleChange}>{this.props.children}</textarea>;
    }
}
