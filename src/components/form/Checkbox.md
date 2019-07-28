```js
import FormField from './FormField';

<React.Fragment>
    <FormField label='Default checkbox'>
        <Checkbox onChange={v => console.log(v) } />
    </FormField>
    <FormField label='Disabled checkbox'>
        <Checkbox disabled={true} onChange={v => console.log(v) } />
    </FormField>
</React.Fragment>
```
