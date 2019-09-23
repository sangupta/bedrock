```js
import Button from './../buttons/Button';
import Well from './../containers/Well';

<ToggleTrigger 
    onShow={() => console.log('show children')}
    onClose={() => console.log('hide children')}>

    <Button label='Toggle' />
    <Well>
        This text toggles when the button above is clicked.
    </Well>
</ToggleTrigger>
```
