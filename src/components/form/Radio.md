```js
import FormField from './FormField';

<React.Fragment>
    <FormField label='Default radio'>
        <Radio onChange={v => console.log(v) } />
    </FormField>
    <FormField label='Disabled radio'>
        <Radio disabled={true} onChange={v => console.log(v) } />
    </FormField>
</React.Fragment>
```
