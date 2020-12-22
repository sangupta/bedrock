```js
import BreadcrumbItem from './BreadcrumbItem';

<Breadcrumb onClick={(e, id) => alert('link clicked: ' + id)}>
    <BreadcrumbItem eventID='bedrock'>Bedrock</BreadcrumbItem>
    <BreadcrumbItem eventID='components'>Components</BreadcrumbItem>
    <BreadcrumbItem eventID='navigation'>Navigation</BreadcrumbItem>
    <BreadcrumbItem eventID='breadcrumb' active={true}>Breadcrumb</BreadcrumbItem>
</Breadcrumb>
```
