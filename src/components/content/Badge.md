Badges are useful as small count and labeling component.

```js
<Badge>New</Badge>
```
All available variants are:
```js
<div className='bedrock-docs-bar'>
    <Badge variant='primary' onClick={() => alert('primary clicked')}>New</Badge>
    <Badge variant='secondary' onClick={() => alert('secondary clicked')}>New</Badge>
    <Badge variant='success' onClick={() => alert('success clicked')}>New</Badge>
    <Badge variant='warning' onClick={() => alert('warning clicked')}>New</Badge>
    <Badge variant='danger' onClick={() => alert('danger clicked')}>New</Badge>
    <Badge variant='info' onClick={() => alert('info clicked')}>New</Badge>
    <Badge variant='light' onClick={() => alert('light clicked')}>New</Badge>
    <Badge variant='dark' onClick={() => alert('dark clicked')}>New</Badge>
</div>
```

## Badge Pills

```js
<div className='bedrock-docs-bar'>
    <Badge variant='primary' asPill={true}>New</Badge>
    <Badge variant='secondary' asPill={true}>New</Badge>
    <Badge variant='success' asPill={true}>New</Badge>
    <Badge variant='warning' asPill={true}>New</Badge>
    <Badge variant='danger' asPill={true}>New</Badge>
    <Badge variant='info' asPill={true}>New</Badge>
    <Badge variant='light' asPill={true}>New</Badge>
    <Badge variant='dark' asPill={true}>New</Badge>
</div>
```
