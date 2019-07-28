import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface CheckboxProps extends BaseProps {
    disabled?: boolean;

    value?: string;

    /**
     * The attribute name to use
     */
    name?: string;

    /**
     * Whether the checkbox is selected by default or not
     */
    checked?: boolean;

    /**
     * Handler fired when the value changes
     */
    onChange?: Function;
}

export default class Checkbox extends React.Component<CheckboxProps, any> {

    static defaultProps = {
        disabled: false,
        value: ''
    }

    handleChange = (e) => {
        if(this.props.onChange) {
            this.props.onChange(e.target.checked);
        }
    }

    render() {
        const css: string = mergeCSS('form-check-input', this.props.className);
        const extra: any = getProps(this.props, ['name', 'value']);
        if (this.props.disabled) {
            extra.disabled = 'disabled';
        }
        if (this.props.checked) {
            extra.checked = 'checked';
        }

        return <input {...extra} type='checkbox' className={css} onChange={this.handleChange} />;
    }

}