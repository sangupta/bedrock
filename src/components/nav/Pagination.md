```js
import PaginationItem from './PaginationItem';

<Pagination>
    <PaginationItem disabled={true}>Previous</PaginationItem>
    <PaginationItem>1</PaginationItem>
    <PaginationItem active={true}>2</PaginationItem>
    <PaginationItem>3</PaginationItem>
    <PaginationItem>Next</PaginationItem>
</Pagination>
```
### Alignment

You may align the pagination using `start`, `center` or `end` properties.

```js
import PaginationItem from './PaginationItem';

<Pagination align='center'>
    <PaginationItem disabled={true}>Previous</PaginationItem>
    <PaginationItem>1</PaginationItem>
    <PaginationItem active={true}>2</PaginationItem>
    <PaginationItem>3</PaginationItem>
    <PaginationItem>Next</PaginationItem>
</Pagination>
```

```js
import PaginationItem from './PaginationItem';

<Pagination align='end'>
    <PaginationItem disabled={true}>Previous</PaginationItem>
    <PaginationItem>1</PaginationItem>
    <PaginationItem active={true}>2</PaginationItem>
    <PaginationItem>3</PaginationItem>
    <PaginationItem>Next</PaginationItem>
</Pagination>
```

### Sizing

```js
import PaginationItem from './PaginationItem';

<Pagination size='large'>
    <PaginationItem disabled={true}>Previous</PaginationItem>
    <PaginationItem>1</PaginationItem>
    <PaginationItem active={true}>2</PaginationItem>
    <PaginationItem>3</PaginationItem>
    <PaginationItem>Next</PaginationItem>
</Pagination>
```

```js
import PaginationItem from './PaginationItem';

<Pagination size='small'>
    <PaginationItem disabled={true}>Previous</PaginationItem>
    <PaginationItem>1</PaginationItem>
    <PaginationItem active={true}>2</PaginationItem>
    <PaginationItem>3</PaginationItem>
    <PaginationItem>Next</PaginationItem>
</Pagination>
```
