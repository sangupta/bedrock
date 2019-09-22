import * as React from 'react';
import { BaseProps, mergeCSS, NoProps } from './../BedrockUtils';
import Form from './../components/form/Form';
import Button from './../components/buttons/Button';
import Image from './../components/content/Image';
import TextInput from './../components/form/TextInput';
import PasswordInput from './../components/form/PasswordInput';

interface SignInPageProps extends BaseProps {

    /**
     * The URL of the logo image to use on page
     */
    imageUrl?: string;

    /**
     * Alternate text for logo image
     */
    imageAlt?: string;

    /**
     * Image height to use
     */
    imageHeight?: string | number;

    /**
     * Image width to use
     */
    imageWidth?: string | number;

    /**
     * Title of the page
     */
    title?: string;

    /**
     * Placeholder to use for `userName` field
     */
    userNamePlaceholder?: string;

    /**
     * Username to pre-populate with, if any
     */
    userName?: string;

    /**
     * Placeholder to use for `password` field
     */
    passwordPlaceholder?: string;

    /**
     * Whether to pre-select the `Remember me` checkbox or not
     */
    rememberMe?: boolean;

    /**
     * Text to use instead of `Remember me`
     */
    rememberMeText?: string;

    /**
     * Whether to display the remember me option
     */
    showRememberMe?: boolean;

    /**
     * Text to use on `Sign in` button
     */
    signInButtonText?: string;

    /**
     * Text to use for `footer`
     */
    footerText?: string;

    /**
     * Whether to show the password show/hide toggle
     */
    showPasswordToggle?: boolean;

    /**
     * Function handler called when the `Sign in` button is clicked
     */
    onSignIn?: Function;

    /**
     * Function handler called when the use toggles the `Remember me` checkbox
     */
    onRememberMe?: Function;
}

export default class SignInPage extends React.Component<SignInPageProps, NoProps> {

    static defaultProps = {
        title: 'Sign In',
        userNamePlaceholder: 'Email address',
        passwordPlaceholder: 'Password',
        rememberMeText: 'Remember me',
        showRememberMe: true,
        signInButtonText: 'Sign In',
        footerText: '',
        showPasswordToggle: true
    }

    userName: string;

    password: string;

    rememberMe: boolean;

    constructor(props, context) {
        super(props, context);

        this.userName = props.userName;
        this.rememberMe = props.rememberMe;
    }

    getImage = () => {
        if (this.props.imageUrl) {
            return <Image src={this.props.imageUrl}
                className='mb-4'
                altText={this.props.imageAlt}
                width={this.props.imageHeight}
                height={this.props.imageHeight} />;
        }

        return null;
    }

    getRememberMe = () => {
        if (!this.props.showRememberMe) {
            return null;
        }

        return <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me" /> {this.props.rememberMeText}
            </label>
        </div>;
    }

    getFooter = () => {
        if (this.props.footerText) {
            return <p className="mt-5 mb-3 text-muted">{this.props.footerText}</p>;
        }

        return null;
    }

    handleSignInClick = () => {
        if (this.props.onSignIn) {
            this.props.onSignIn(this.userName, this.password, this.rememberMe);
        }
    }

    handleUserNameChange = (userName): void => {
        this.userName = userName;
    }

    handlePasswordChange = (password): void => {
        this.password = password;
    }

    render() {
        const css: string = mergeCSS('bedrock-signin-page', this.props.className);

        return <div className={css}>
            <Form className="form-signin">
                {this.getImage()}
                <h1 className="h3 mb-3 font-weight-normal">{this.props.title}</h1>

                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <TextInput type='email' placeholder={this.props.userNamePlaceholder} required={true} autoFocus={true} onChange={this.handleUserNameChange} value={this.props.userName} />

                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <PasswordInput className='password-input-group' placeholder={this.props.passwordPlaceholder} required={true} showHideToggle={this.props.showPasswordToggle} onChange={this.handlePasswordChange} />
                {this.getRememberMe()}

                <Button variant='primary' size='large' className='btn-block' onClick={this.handleSignInClick}>{this.props.signInButtonText}</Button>

                {this.getFooter()}
            </Form>
        </div>
    }
}
