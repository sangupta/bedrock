```js
import FormField from './FormField';

<React.Fragment>
    <FormField label='Default checkbox'>
        <Checkbox onChange={v => console.log(v) } />
    </FormField>
    <FormField label='Checked checkbox'>
        <Checkbox checked={true} />
    </FormField>
    <FormField label='Disabled checkbox'>
        <Checkbox disabled={true} />
    </FormField>
    <FormField label='Disabled checked checkbox'>
        <Checkbox disabled={true} checked={true} />
    </FormField>
    <FormField label='Indeterminate checkbox'>
        <Checkbox indeterminate={true} />
    </FormField>
    <FormField label='Disabled indeterminate checkbox'>
        <Checkbox disabled={true} indeterminate={true} />
    </FormField>
</React.Fragment>
```
