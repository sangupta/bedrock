```js
import Button from './../buttons/Button';

<ButtonGroup>
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
</ButtonGroup>
```

### Sizing

```js
import Button from './../buttons/Button';

<ButtonGroup size='large'>
    <Button>Left Large</Button>
    <Button>Middle Large</Button>
    <Button>Right Large</Button>
</ButtonGroup>
```

```js
import Button from './../buttons/Button';

<ButtonGroup size='small'>
    <Button>Left Small</Button>
    <Button>Middle Small</Button>
    <Button>Right Small</Button>
</ButtonGroup>
```

### With links

```js
import Link from './../text/Link';

<ButtonGroup>
    <Link active={true}>Active Link</Link>
    <Link>Link 2</Link>
    <Link>Link 3</Link>
</ButtonGroup>
```

### Mixed Styling

```js
import Button from './../buttons/Button';

<ButtonGroup size='small'>
    <Button variant='danger'>Left</Button>
    <Button variant='warning'>Middle</Button>
    <Button variant='success'>Right</Button>
</ButtonGroup>
```

### Outlined Styles

```js
import Button from './../buttons/Button';

<ButtonGroup size='small'>
    <Button outline={true} variant='danger'>Left</Button>
    <Button outline={true} variant='warning'>Middle</Button>
    <Button outline={true} variant='success'>Right</Button>
</ButtonGroup>
```