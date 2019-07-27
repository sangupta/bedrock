import * as React from 'react';
import Form from './../components/form/Form';
import FormField from '../components/form/FormField';
import TextInput from './../components/form/TextInput';
import PasswordInput from './../components/form/PasswordInput';
import { BaseProps } from 'BedrockUtils';

interface LoginBoxProps extends BaseProps {
    /**
     * Handler fired when the login form is submitted
     */
    onSubmit?: Function;
}

export default class LoginBox extends React.Component<LoginBoxProps, any> {

    username: string;

    password: string;

    handleSubmitClick = (e) => {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.username,
                password: this.password
            });
        }
    }

    handleUserChange = (v) => {
        this.username = v;
    }

    handlePasswordChange = (v) => {
        this.password = v;
    }

    render() {
        return <Form className={this.props.className}>
            <FormField label="Username">
                <TextInput type='email' placeholder='Email address' onChange={this.handleUserChange} />
            </FormField>
            <FormField label="Password">
                <PasswordInput onChange={this.handlePasswordChange} />
            </FormField>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmitClick}>Submit</button>
        </Form>;
    }

}
