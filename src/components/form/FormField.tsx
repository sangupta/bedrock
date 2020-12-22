import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from '../../BedrockUtils';
import Checkbox from './Checkbox';

interface FormFieldProps extends BaseProps {
    label?: string;
    for?: string;
    help?: string;
}

/**
 * Component used to render a form-input element inside a Form. The `id`
 * from this component, if present, is provided to the very first child
 * of this element.
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

        // this is needed, as `id` is copied to first child
        delete extra.id;

        extra.className = hasCheckbox ? 'form-check-label' : 'form-label';
        if(this.props.id) {
            extra.htmlFor = this.props.id;
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
        const cloned = [];

        // check if our child is a Checkbox
        const children = React.Children.toArray(this.props.children);
        let hasCheckbox = true;
        for (let index = 0; index < children.length; index++) {
            let child: any = children[index];
            if (child.type !== Checkbox) {
                hasCheckbox = false;
            }
            if(this.props.id && index == 0) {
                cloned.push(React.cloneElement(child, { id: this.props.id, ... child.props}, child.props.children));
            } else {
                cloned.push(child);
            }
        }

        // render
        const formClass: string = hasCheckbox ? 'form-check' : '';
        const css: string = mergeCSS(formClass, { 'mb-3' : !hasCheckbox }, this.props.className);

        if (hasCheckbox) {
            return <div className={css}>
                {this.props.children}
                {this.getLabel(hasCheckbox)}
            </div>;
        }

        // a non-checkbox form element
        return <div className={css}>
            {this.getLabel(hasCheckbox)}
            {cloned}
            {this.getHelp()}
        </div>;
    }

}
