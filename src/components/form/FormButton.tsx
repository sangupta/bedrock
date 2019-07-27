import * as React from 'react';
import { BaseProps, mergeCSS, getProps } from './../../BedrockUtils';

interface FormButtonProps extends BaseProps {
    /**
     * Element styling to be applied
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

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

export default class FormButton extends React.Component<FormButtonProps, any> {

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

        if(this.props.disabled) {
            extra.disabled = 'disabled';
        }
        
        return <button className={css} {...extra} onClick={this.handleClick}>{this.props.children}</button>;
    }

}
