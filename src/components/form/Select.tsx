import * as React from 'react';
import { mergeCSS, BaseProps, getProps, NoProps } from './../../BedrockUtils';

interface SelectProps extends BaseProps {

    /**
     * Handler called when a value is selected
     */
    onSelect?: Function;

    /**
     * Whether the control is disabled or not?
     */
    disabled?: boolean;

}

export default class Select extends React.Component<SelectProps, NoProps> {

    handleChange = (e) => {
        console.log(e.target.value);
        if (this.props.onSelect) {
            console.log(e);
            this.props.onSelect(e.target.value);
        }
    }

    render() {
        const css: string = mergeCSS('form-select', this.props.className);
        const extra: any = getProps(this.props);
        if (this.props.disabled) {
            extra.disabled = 'disabled';
        }

        return <select {...extra} className={css} onChange={this.handleChange}>
            {this.props.children}
        </select>;
    }

}
