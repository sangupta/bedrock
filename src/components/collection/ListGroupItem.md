```js
import ListGroup from './ListGroup';

<ListGroup>
    <ListGroupItem variant='default'>A simple default list group item</ListGroupItem>
    <ListGroupItem variant='primary'>A simple primary list group item</ListGroupItem>
    <ListGroupItem variant='secondary'>A simple secondary list group item</ListGroupItem>
    <ListGroupItem variant='success'>A simple success list group item</ListGroupItem>
    <ListGroupItem variant='danger'>A simple danger list group item</ListGroupItem>
    <ListGroupItem variant='warning'>A simple warning list group item</ListGroupItem>
    <ListGroupItem variant='info'>A simple info list group item</ListGroupItem>
    <ListGroupItem variant='light'>A simple light list group item</ListGroupItem>
    <ListGroupItem variant='dark'>A simple dark list group item</ListGroupItem>
</ListGroup>
```

## Contextual Classes

Add `action={true}` to make the list item appear with hover
contextual style.

```js
import ListGroup from './ListGroup';

<ListGroup>
    <ListGroupItem action={true}>January</ListGroupItem>
    <ListGroupItem action={true}>February</ListGroupItem>
    <ListGroupItem action={true}>March</ListGroupItem>
    <ListGroupItem action={true}>April</ListGroupItem>
</ListGroup>
```
