Badges are useful as small count and labeling component.

```js
<Badge>New</Badge>
```
All available variants are:
```js
<div class='bedrock-docs-bar'>
    <Badge variant='primary'>New</Badge>
    <Badge variant='secondary'>New</Badge>
    <Badge variant='success'>New</Badge>
    <Badge variant='warning'>New</Badge>
    <Badge variant='danger'>New</Badge>
    <Badge variant='info'>New</Badge>
    <Badge variant='light'>New</Badge>
    <Badge variant='dark'>New</Badge>
</div>
```

## Badge Pills

```js
<div class='bedrock-docs-bar'>
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

## Link Badges

```js
<div class='bedrock-docs-bar'>
    <Badge variant='primary' asLink={true} onClick={() => alert('primary clicked')}>New</Badge>
    <Badge variant='secondary' asLink={true} onClick={() => alert('secondary clicked')}>New</Badge>
    <Badge variant='success' asLink={true} onClick={() => alert('success clicked')}>New</Badge>
    <Badge variant='warning' asLink={true} onClick={() => alert('warning clicked')}>New</Badge>
    <Badge variant='danger' asLink={true} onClick={() => alert('danger clicked')}>New</Badge>
    <Badge variant='info' asLink={true} onClick={() => alert('info clicked')}>New</Badge>
    <Badge variant='light' asLink={true} onClick={() => alert('light clicked')}>New</Badge>
    <Badge variant='dark' asLink={true} onClick={() => alert('dark clicked')}>New</Badge>
</div>
```
