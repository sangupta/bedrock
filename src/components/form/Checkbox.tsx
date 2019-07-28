import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface CheckboxProps extends BaseProps {
    disabled?: boolean;

    value?: string;

    /**
     * The attribute name to use
     */
    name?: string;
}

export default class Checkbox extends React.Component<CheckboxProps, any> {

    static defaultProps = {
        disabled: false,
        value: ''
    }

    render() {
        const css: string = mergeCSS('form-check-input', this.props.className);
        const extra: any = getProps(this.props, ['name', 'value']);
        if (this.props.disabled) {
            extra.disabled = 'disabled';
        }

        return <input {...extra} type='checkbox' className={css} />;
    }

}