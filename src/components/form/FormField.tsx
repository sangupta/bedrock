import * as React from 'react';
import { BaseProps, mergeCSS } from '../../BedrockUtils';

interface FormFieldProps extends BaseProps {
    label?: string;
    for?: string;
    help?: string;
}

export default class FormField extends React.Component<FormFieldProps, any> {

    static defaultProps = {
        for: '',
        help: '',
        label: ''
    }

    getLabel = () => {
        if (!this.props.label) {
            return null;
        }

        return <label htmlFor={this.props.for}>{this.props.label}</label>;
    }

    getHelp = () => {
        if(!this.props.help) {
            return null;
        }

        return <small className="form-text text-muted">{this.props.help}</small>;
    }

    render() {
        const css: string = mergeCSS('form-group', this.props.className);

        return <div className={css}>
            {this.getLabel()}
            {this.props.children}
            {this.getHelp()}
        </div>;
    }

}
