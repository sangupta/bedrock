```js
import NavItem from './NavItem';

<Nav>
    <NavItem>Link</NavItem>
    <NavItem active={true}>Active</NavItem>
    <NavItem>Link</NavItem>
    <NavItem disabled={true}>Disabled</NavItem>
</Nav>
```

## Horizontal Alignment

### Centered

```js
import NavItem from './NavItem';

<Nav align='center'>
    <NavItem>Link</NavItem>
    <NavItem active={true}>Active</NavItem>
    <NavItem>Link</NavItem>
    <NavItem disabled={true}>Disabled</NavItem>
</Nav>
```

### Right

```js
import NavItem from './NavItem';

<Nav align='right'>
    <NavItem>Link</NavItem>
    <NavItem active={true}>Active</NavItem>
    <NavItem>Link</NavItem>
    <NavItem disabled={true}>Disabled</NavItem>
</Nav>
```

### Justified

```js
import NavItem from './NavItem';

<Nav align='justify'>
    <NavItem>Link</NavItem>
    <NavItem active={true}>Active</NavItem>
    <NavItem>Link</NavItem>
    <NavItem disabled={true}>Disabled</NavItem>
</Nav>
```

## Vertical Alignment

```js
import NavItem from './NavItem';

<Nav vertical={true}>
    <NavItem>Link</NavItem>
    <NavItem active={true}>Active</NavItem>
    <NavItem>Link</NavItem>
    <NavItem disabled={true}>Disabled</NavItem>
</Nav>
```

## Type

### Tabs

```js
import NavItem from './NavItem';

<Nav type='tabs'>
    <NavItem>Link</NavItem>
    <NavItem active={true}>Active</NavItem>
    <NavItem>Link</NavItem>
    <NavItem disabled={true}>Disabled</NavItem>
</Nav>
```

### Pills

```js
import NavItem from './NavItem';

<Nav type='pills'>
    <NavItem>Link</NavItem>
    <NavItem active={true}>Active</NavItem>
    <NavItem>Link</NavItem>
    <NavItem disabled={true}>Disabled</NavItem>
</Nav>
```

## Fill

```js
import NavItem from './NavItem';

<Nav type='pills' fill={true}>
    <NavItem>Link</NavItem>
    <NavItem active={true}>Active</NavItem>
    <NavItem>Link</NavItem>
    <NavItem disabled={true}>Disabled</NavItem>
</Nav>
```