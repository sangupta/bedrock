A `NavTreeItem` can be used to display a single list
of navigation items as a tree. The attached `onClick`
handler will behave the same way, as it would as if
wrapped inside a `NavTree` component. However, for styling
you would need to wrap it inside a `ul` or an `ol` tag.

```js
<ul className='bedrock-navtree'>
    <NavTreeItem label='Inbox' badge='4721' onClick={console.log}>
        <NavTreeItem label='Work' badge='63' />
        <NavTreeItem label='Projects' badge='63'>
            <NavTreeItem label='Project 1' badge='63' />
            <NavTreeItem label='Project 2' badge='63' />
        </NavTreeItem>
    </NavTreeItem>
</ul>
```
