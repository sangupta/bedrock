```js:playground
<Button size='small' label='Hello World' />
```

# Using children

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

# Simple buttons using the `label` property.

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

# Outlined buttons

Set `outline` prop to `true` to render buttons that are outlined.

```js
<div className='bedrock-docs-bar'>
    <Button outline={true} variant='primary' label='Primary Button' />
    <Button outline={true} variant='secondary' label='Secondary Button' />
    <Button outline={true} variant='success' label='Success Button' />
    <Button outline={true} variant='danger' label='Danger Button' />
    <Button outline={true} variant='warning' label='Warning Button' />
    <Button outline={true} variant='info' label='Info Button' />
    <Button outline={true} variant='light' label='Light Button' />
    <Button outline={true} variant='dark' label='Dark Button' />
</div>
```

# Disabled buttons

Set `disabled` prop to `true` to render buttons that are outlined.

```js
<div className='bedrock-docs-bar'>
    <Button disabled={true} variant='primary' label='Primary Button' />
    <Button disabled={true} variant='secondary' label='Secondary Button' />
    <Button disabled={true} variant='success' label='Success Button' />
    <Button disabled={true} variant='danger' label='Danger Button' />
    <Button disabled={true} variant='warning' label='Warning Button' />
    <Button disabled={true} variant='info' label='Info Button' />
    <Button disabled={true} variant='light' label='Light Button' />
    <Button disabled={true} variant='dark' label='Dark Button' />
</div>
```

# Sizes

Buttons are available in two more sizes: `large` and `small`.

```js
<div>
    <div className='bedrock-docs-bar'>
        <Button size='large' variant='primary' label='Primary Large' />
        <Button size='large' variant='secondary' label='Secondary Large' />
    </div>
    <div className='bedrock-docs-bar'>
        <Button variant='primary' label='Primary Default' />
        <Button variant='secondary' label='Secondary Default' />
    </div>
    <div className='bedrock-docs-bar'>
        <Button size='small' variant='primary' label='Primary Small' />
        <Button size='small' variant='secondary' label='Secondary Small' />
    </div>
</div>
```
