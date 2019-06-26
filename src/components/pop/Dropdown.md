```js
import Button from './../button/Button';
import Menu from './Menu';
import MenuItem from './MenuItem';

<Dropdown>
    <Button variant='primary' title='Menu' />
    <Menu>
        <MenuItem>Action</MenuItem>
        <MenuItem active={true}>Another action</MenuItem>
        <MenuItem disabled={true}>Disabled action</MenuItem>
        <MenuItem>Something else here</MenuItem>
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
        <MenuItem active={true}>Another action</MenuItem>
        <MenuItem disabled={true}>Disabled action</MenuItem>
        <MenuItem>Something else here</MenuItem>
    </Menu>
</Dropdown>
```
