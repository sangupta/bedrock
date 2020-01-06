### Using a left rail

```js
import { Link } from './../index';

<div class='bedrock-docs-fullpage'>
    <PageWithRail rail="Hello World" navbarCss='bg-dark'
        header={<Link className="navbar-brand col-sm-3 col-md-2 mr-0">Company name</Link>}>
        This is the content area. You can click on the top-left
        icon to toggle visibility of the left rail.
    </PageWithRail>
</div>
```

### Using a right rail

```js
import { Link } from './../index';

<div class='bedrock-docs-fullpage'>
    <PageWithRail rail="Hello World" navbarCss='bg-dark' railPlacement='right'
        header={<Link className="navbar-brand col-sm-3 col-md-2 mr-0">Company name</Link>}>
        This is the content area. You can click on the top-left
        icon to toggle visibility of the left rail.
    </PageWithRail>
</div>
```

### Using a right rail, with right-hand toggle

```js
import { Link } from './../index';

<div class='bedrock-docs-fullpage'>
    <PageWithRail rail="Hello World" 
        navbarCss='bg-dark' 
        railPlacement='right' 
        togglePlacement='right'
        header={<Link className="navbar-brand col-sm-3 col-md-2 mr-0">Company name</Link>}>
        This is the content area. You can click on the top-left
        icon to toggle visibility of the left rail.
    </PageWithRail>
</div>
```