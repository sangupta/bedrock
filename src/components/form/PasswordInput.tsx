import * as React from 'react';
import { mergeCSS, BaseProps } from './../../BedrockUtils';

interface PasswordInputProps extends BaseProps {
    placeholder?: string;

    /**
     * Handler fired when the value changes
     */
    onChange?: Function;
}

export default class PasswordInput extends React.Component<PasswordInputProps, any> {

    static defaultProps = {
        placeholder: ''
    }

    constructor(props, context) {
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
        return <div className={css}>
            <input type={type} className="form-control" placeholder={this.props.placeholder} onChange={this.handleChange} />
            <div className="input-group-append">
                <span className="input-group-text cursor-pointer" onClick={this.toggleMode}>{label}</span>
            </div>
        </div>;
    }
}
