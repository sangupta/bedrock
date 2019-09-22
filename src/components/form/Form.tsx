import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface FormProps extends BaseProps {
    action?: string;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoComplete?: boolean;
    method?: 'get' | 'post' | 'dialog';
    name?: string;
    noValidate?: boolean;
    target?: string;
}

/**
 * Component to encapsulate various form elements in a single
 * form.
 */
export default class Form extends React.Component<FormProps, NoProps> {

    static defaultProps = {
        autoComplete: true
    }

    render() {
        const css: string = mergeCSS(this.props.className);
        const extra: any = getProps(this.props,
            ['action', 'autoCapitalize', 'method', 'name', 'noValidate', 'target']);

        if (this.props.autoComplete) {
            extra.autoComplete = 'on';
        } else {
            extra.autoComplete = 'off';
        }

        return <form className={css} {...extra}>
            {this.props.children}
        </form>;
    }

}
