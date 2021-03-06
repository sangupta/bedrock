import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps, Variant } from './../../BedrockUtils';

interface FormButtonProps extends BaseProps {
    /**
     * Element styling to be applied
     */
    variant?: Variant;

    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formMethod?: string;
    type?: 'submit' | 'reset' | 'button';
    name?: string;
    formTarget?: string;
    formNoValidate?: boolean;

    onClick?: React.MouseEventHandler;
}

/**
 * A button component to be specifically used inside a Form
 * component. It can be used to reset a given form, or submit
 * the form.
 */
export default class FormButton extends React.Component<FormButtonProps, NoProps> {

    static defaultProps = {
        type: 'button',
        variant: 'primary'
    }

    handleClick = (e: React.MouseEvent) => {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const css: string = mergeCSS('btn', 'btn-' + this.props.variant, this.props.className);
        const extra: any = getProps(this.props,
            ['form', 'formAction', 'formMethod', 'type', 'name', 'formTarget', 'formNoValidate']);

        if (this.props.disabled) {
            extra.disabled = 'disabled';
        }

        return <button className={css} {...extra} onClick={this.handleClick}>{this.props.children}</button>;
    }

}
