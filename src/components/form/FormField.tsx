import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from '../../BedrockUtils';
import Checkbox from './Checkbox';

interface FormFieldProps extends BaseProps {
    label?: string;
    for?: string;
    help?: string;
}

/**
 * Component used to render a form-input element inside a Form.
 */
export default class FormField extends React.Component<FormFieldProps, NoProps> {

    static defaultProps = {
        for: '',
        help: '',
        label: ''
    }

    getLabel = (hasCheckbox: boolean) => {
        if (!this.props.label) {
            return null;
        }

        const extra:any = getProps(this.props);
        if (hasCheckbox) {
            extra.className = 'form-check-label';
        }
        if (this.props.for) {
            extra.htmlFor = this.props.for;
        }

        return <label {...extra}>{this.props.label}</label>;
    }

    getHelp = () => {
        if (!this.props.help) {
            return null;
        }

        return <small className="form-text text-muted">{this.props.help}</small>;
    }

    render() {
        // check if our child is a Checkbox
        const children = React.Children.toArray(this.props.children);
        let hasCheckbox = true;
        for (let index = 0; index < children.length; index++) {
            let child: any = children[index];
            if (child.type !== Checkbox) {
                hasCheckbox = false;
                break;
            }
        }

        // render
        const formClass: string = hasCheckbox ? 'form-check' : 'form-group';
        const css: string = mergeCSS(formClass, this.props.className);

        if (hasCheckbox) {
            return <div className={css}>
                {this.props.children}
                {this.getLabel(hasCheckbox)}
            </div>;
        }

        // a non-checkbox form element
        return <div className={css}>
            {this.getLabel(hasCheckbox)}
            {this.props.children}
            {this.getHelp()}
        </div>;
    }

}
