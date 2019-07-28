import * as React from 'react';
import { BaseProps, mergeCSS } from './../../BedrockUtils';

interface CheckboxProps extends BaseProps {
    disabled?: boolean;
    value?: string;
}

export default class Checkbox extends React.Component<CheckboxProps, any> {

    static defaultProps = {
        disabled: false,
        value: ''
    }

    render() {
        const css: string = mergeCSS('form-check-input', this.props.className);
        const extra: any = {};
        if (this.props.disabled) {
            extra.disabled = 'disabled';
        }
        if (this.props.value) {
            extra.value = this.props.value;
        }

        return <input {...extra} type='checkbox' className={css} />;
    }

}