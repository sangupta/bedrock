```js
import Form from './Form';
import TextInput from './TextInput';
import Checkbox from './Checkbox';

<Form>
    <FormField id='emailAddress' label='Email Address' help="We'll never share your email with anyone else.">
        <TextInput placeholder='Email' />
    </FormField>

    <FormField id='rememberMe' label='Remember Me'>
        <Checkbox />
    </FormField>

    <FormField id='longLived' label='Do not ask for password again'>
        <Checkbox />
    </FormField>
</Form>
```
