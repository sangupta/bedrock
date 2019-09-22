import * as React from 'react';
import { BaseProps, mergeCSS, getProps, NoProps } from './../../BedrockUtils';

interface RadioProps extends BaseProps {
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

    /**
     * Whether the checkbox is in indeterminate state
     */
    indeterminate?: boolean;
}

export default class Radiobox extends React.Component<RadioProps, NoProps> {

    static defaultProps = {
        disabled: false,
        value: '',
        indeterminate: false
    }

    inputRef: any;

    constructor(props, context) {
        super(props, context);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.setIndeterminateState();
    }

    componentDidUpdate() {
        this.setIndeterminateState();
    }

    setIndeterminateState = () => {
        let value = this.props.indeterminate;
        let ref = this.inputRef.current;
        if (ref) {
            ref.indeterminate = value;
        }
    }

    handleChange = (e) => {
        if (this.props.onChange) {
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

        return <input ref={this.inputRef} {...extra} type='radio' className={css} onChange={this.handleChange} />;
    }

}