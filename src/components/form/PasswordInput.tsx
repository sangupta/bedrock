import * as React from 'react';
import { mergeCSS, BaseProps, getProps } from './../../BedrockUtils';

interface PasswordInputProps extends BaseProps {

    /**
     * Placeholder text to use
     */
    placeholder?: string;

    /**
     * Handler fired when the value changes
     */
    onChange?: Function;

    /**
     * Is the field required?
     */
    required?: boolean;

    /**
     * Whether to auto-focus the field
     */
    autoFocus?: boolean;

    /**
     * Whether to display the hide/show toggle
     */
    showHideToggle?: boolean;

    /**
     * Is auto-complete enabled/disabled?
     */
    autoComplete?: boolean;
}

interface PasswordInputState {
    show: boolean;
}

export default class PasswordInput extends React.Component<PasswordInputProps, PasswordInputState> {

    static defaultProps = {
        placeholder: '',
        required: false,
        autoFocus: false,
        showHideToggle: true,
        autoComplete: true
    }

    constructor(props:PasswordInputProps, context:any) {
        super(props, context);

        this.state = {
            show: false
        }
    }

    toggleMode = () => {
        this.setState((state) => {
            return { show: !state.show }
        });
    }

    handleChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        const css: string = mergeCSS('input-group', this.props.className);
        const type: string = this.state.show ? 'text' : 'password';
        const label: string = this.state.show ? 'Hide' : 'Show';
        const extra: any = getProps(this.props, ['name']);

        if (this.props.required) {
            extra.required = 'required';
        }

        if (this.props.autoFocus) {
            extra.autoFocus = 'autoFocus';
        }

        if (this.props.autoComplete) {
            extra.autoComplete = '' + this.props.autoComplete;
        }

        if (!this.props.showHideToggle) {
            return <input {...extra} type={type} className="form-control" placeholder={this.props.placeholder} onChange={this.handleChange} />
        }

        return <div className={css}>
            <input {...extra} type={type} className="form-control" placeholder={this.props.placeholder} onChange={this.handleChange} />
            <div className="input-group-append">
                <span className="input-group-text cursor-pointer" onClick={this.toggleMode}>{label}</span>
            </div>
        </div>;
    }
}
