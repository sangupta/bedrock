```js
import Button from './../button/Button';
import Menu from './Menu';
import MenuItem from './MenuItem';

<Dropdown>
    <Button variant='primary' title='Menu' />
    <Menu onSelect={v => alert('selected value: ' + v)}>
        <MenuItem value='action'>Action</MenuItem>
        <MenuItem value='another'>Another action</MenuItem>
        <MenuItem value='disabled' disabled={true}>Disabled action</MenuItem>
        <MenuItem value='else'>Something else here</MenuItem>
    </Menu>
</Dropdown>
```

## Split button

```js
import Menu from './Menu';
import MenuItem from './MenuItem';
import SplitButton from './../button/SplitButton';

<Dropdown>
    <SplitButton variant='primary' label='Menu' />
    <Menu>
        <MenuItem>Action</MenuItem>
        <MenuItem>Another action</MenuItem>
        <MenuItem disabled={true}>Disabled action</MenuItem>
        <MenuItem>Something else here</MenuItem>
    </Menu>
</Dropdown>
```
