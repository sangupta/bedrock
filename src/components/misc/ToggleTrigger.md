```js
import Button from './../button/Button';
import Well from './../containers/Well';

<ToggleTrigger 
    onShow={() => console.log('show children')}
    onClose={() => console.log('hide children')}>

    <Button title='Toggle' />
    <Well>
        This text toggles when the button above is clicked.
    </Well>
</ToggleTrigger>
```
