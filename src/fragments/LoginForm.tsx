import React from 'react';
import Button from '../components/form/Button';
import Checkbox from '../components/form/Checkbox';
import Form from '../components/form/Form';
import PasswordInput from '../components/form/PasswordInput';
import TextInput from '../components/form/TextInput';
import HBox from '../components/layout/HBox';

export interface LoginInfo {
    username: string;
    password: string;
    keepMeSignedIn: string;
}

export interface LoginFormProps {
    formName?: string;
    username?: string;
    password?: string;
    keepMeSignedIn?: boolean;
    showKeepMeSignedIn?: boolean;
    onLoginUpdate?: (payload: LoginInfo) => void;
    onLoginSubmit?: (payload: LoginInfo) => void;
}

export default class LoginForm extends React.Component<LoginFormProps> {

    static defaultProps = {
        formName: '',
        showKeepMeSignedIn: true,
        keepMeSignedIn: false,
    }

    render() {
        const { formName, onLoginUpdate, username, password, showKeepMeSignedIn, keepMeSignedIn, onLoginSubmit } = this.props;

        return <div className='login-form-container'>
            <Form name={formName} onUpdate={onLoginUpdate} onSubmit={onLoginSubmit} className='form-container'>
                <TextInput name='username' placeholder='Username' value={username} />
                <PasswordInput name='password' placeholder='Password' value={password} />
                {showKeepMeSignedIn
                    ? <HBox>
                        <Checkbox name='keepMeSignedIn' checked={keepMeSignedIn} />
                        &nbsp;Keep me signed in
                    </HBox>
                    : ''}

                <Button type='submit' variant='primary'>Sign-in</Button>
            </Form>
        </div>
    }

}
