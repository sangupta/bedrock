# Bedrock React Components

[![Build status](https://img.shields.io/github/workflow/status/sangupta/bedrock/ci?label=CI&logo=github&style=flat-square)](https://github.com/sangupta/bedrock/actions/workflows/ci.yml)

Bedrock is a [ReactJS][reactjs] UI component library built using [Typescript][typescript].
It uses [Bootstrap 5][bootstrap] CSS framework for styling. `bedrock` still follows the
classic way of including CSS in HTML file to decouple the design system from component
library and also to improve load performance by leveraging browser caching.

### NOTE: Rewrite in progress. Old code is in `bedrock-old` branch.

## Usage

1. Add `@sangupta/bedrock` as a dependency in your `package.json`

2. Update dependencies as:
```sh
# using npm
$ npm install --save @sangupta/bedrock

# using yarn
$ yarn add @sangupta/bedrock
```

3. Use the components in your application:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@sangupta/bedrock';

const HelloWorld = () => {
    return <Button label='Hello World' />
}

// for React 16/17
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
```

## License

MIT License. Copyright (c) 2022, Sandeep Gupta.


<!-- Do not add any visible content below this line -->

[reactjs]: https://reactjs.org/
[typescript]: https://www.typescriptlang.org/
[bootstrap]: https://getbootstrap.com/
