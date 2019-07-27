import * as React from 'react';
import Form from './../components/form/Form';
import FormField from '../components/form/FormField';
import TextInput from './../components/form/TextInput';
import PasswordInput from './../components/form/PasswordInput';

export default class LoginBox extends React.Component<any, any> {

    render() {
        return <Form>
            <FormField label="Username">
                <TextInput type='email' placeholder='Email address' />
            </FormField>
            <FormField label="Password">
                <PasswordInput />
            </FormField>
            <button type="submit" className="btn btn-primary">Submit</button>
        </Form>;
    }

}
