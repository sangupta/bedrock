To display progress of an operation.

```js
<div className='bedrock-docs-bar'>
    <ProgressBar value={50} variant='primary' />
    <ProgressBar value={50} variant='secondary' />
    <ProgressBar value={50} variant='warning' />
    <ProgressBar value={50} variant='danger' />
    <ProgressBar value={50} variant='info' />
    <ProgressBar value={50} variant='light' />
    <ProgressBar value={50} variant='dark' />
</div>
```

### Labels

```js
<div className='bedrock-docs-bar'>
    <ProgressBar value={50} label='50% done' variant='primary' />
    <ProgressBar value={50} label='50% done' variant='secondary' />
    <ProgressBar value={50} label='50% done' variant='warning' />
    <ProgressBar value={50} label='50% done' variant='danger' />
    <ProgressBar value={50} label='50% done' variant='info' />
    <ProgressBar value={50} label='50% done' variant='light' />
    <ProgressBar value={50} label='50% done' variant='dark' />
</div>
```

### Striped

```js
<div className='bedrock-docs-bar'>
    <ProgressBar value={50} striped={true} label='50% done' variant='primary' />
    <ProgressBar value={50} striped={true} label='50% done' variant='secondary' />
    <ProgressBar value={50} striped={true} label='50% done' variant='warning' />
    <ProgressBar value={50} striped={true} label='50% done' variant='danger' />
    <ProgressBar value={50} striped={true} label='50% done' variant='info' />
    <ProgressBar value={50} striped={true} label='50% done' variant='light' />
    <ProgressBar value={50} striped={true} label='50% done' variant='dark' />
</div>
```

### Animated

```js
<div className='bedrock-docs-bar'>
    <ProgressBar value={50} animated={true} striped={true} label='50% done' variant='primary' />
    <ProgressBar value={50} animated={true} striped={true} label='50% done' variant='secondary' />
    <ProgressBar value={50} animated={true} striped={true} label='50% done' variant='warning' />
    <ProgressBar value={50} animated={true} striped={true} label='50% done' variant='danger' />
    <ProgressBar value={50} animated={true} striped={true} label='50% done' variant='info' />
    <ProgressBar value={50} animated={true} striped={true} label='50% done' variant='light' />
    <ProgressBar value={50} animated={true} striped={true} label='50% done' variant='dark' />
</div>
```