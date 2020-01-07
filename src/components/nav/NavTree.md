```js
import NavTreeItem from './NavTreeItem';

<NavTree onClick={console.log}>
    <NavTreeItem label='Home' icon='fas fa-home' badge='63' />
    <NavTreeItem label='Inbox' badge='4721'>
        <NavTreeItem label='Work' badge='63' />
        <NavTreeItem label='Projects' badge='63'>
            <NavTreeItem label='Project 1' badge='63' />
            <NavTreeItem label='Project 2' badge='63' />
        </NavTreeItem>
    </NavTreeItem>
</NavTree>
```
