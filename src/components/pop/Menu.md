```js
import MenuItem from './MenuItem';

<Menu onSelect={(v) => console.log('chosen menu item: ' + v)}>
    <MenuItem value='action'>Action</MenuItem>
    <MenuItem value='active' active={true}>Active action</MenuItem>
    <MenuItem value='disabled' disabled={true}>Disabled action</MenuItem>
    <MenuItem value='something'>Something else here</MenuItem>
</Menu>
```
