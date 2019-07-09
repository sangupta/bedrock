Buttons can be created using either the `children` or
using the `label` property. Preference is given to `children`
over the `label`s.

### Using children

```js
<div className='bedrock-docs-bar'>
    <Button variant='primary'>Primary Button</Button>
    <Button variant='secondary'>Secondary Button</Button>
    <Button variant='success'>Success Button</Button>
    <Button variant='danger'>Danger Button</Button>
    <Button variant='warning'>Warning Button</Button>
    <Button variant='info'>Info Button</Button>
    <Button variant='light'>Light Button</Button>
    <Button variant='dark'>Dark Button</Button>
</div>
```

### Simple buttons using the `label` property.

```js
<div className='bedrock-docs-bar'>
    <Button variant='primary' label='Primary Button' />
    <Button variant='secondary' label='Secondary Button' />
    <Button variant='success' label='Success Button' />
    <Button variant='danger' label='Danger Button' />
    <Button variant='warning' label='Warning Button' />
    <Button variant='info' label='Info Button' />
    <Button variant='light' label='Light Button' />
    <Button variant='dark' label='Dark Button' />
</div>
```

