# Bedrock React Components

[![Build status](https://img.shields.io/github/actions/workflow/status/sangupta/bedrock/ci.yml?branch=main)](https://github.com/sangupta/bedrock/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/sangupta/bedrock/badge.svg?branch=main)](https://coveralls.io/github/sangupta/bedrock?branch=main)

Bedrock is a [ReactJS][reactjs] UI component library built using [Typescript][typescript].
It uses [Bootstrap 5][bootstrap] CSS framework for styling. `bedrock` still follows the
classic way of including CSS in HTML file to decouple the design system from component
library and also to improve load performance by leveraging browser caching. The library
is published as browser-compatible ESM version. Thus, you can directly leverage the
component library in your `importmap` and point it to the latest version.

## Technical notes

* The `bedrock.css` file includes all definitions from the corresponding `bootstrap.css` file
and thus including `bedrock.css` should be sufficient in your project.

* The library is built and tested against the latest versions (as of date):
  * React 18.2.0 (runtime dependency)
  * Bootstrap 5.2.3 (dev dependency)
  * Node 20 (dev dependency)

* CSS file needs to be currently manually included in your `index.html` file. In future,
once **CSS import assertions** `import styles from './bedrock.css' assert { type: 'css }`
become available, this requirement will be removed.

## Usage

1. Add `@sangupta/bedrock` as a dependency in your `package.json`

2. Update dependencies as:
```sh
# using npm
$ npm install --save @sangupta/bedrock

# using yarn
$ yarn add @sangupta/bedrock
```

3. Include the `bedrock.css` file in your `index.html` file as:
```sh
<link href="node_modules/@sangupta/bedrock/dist/bedrock.css" rel="stylesheet">
```

4. Use the components in your application:

```js
import React from 'react';
import { Button } from '@sangupta/bedrock';

const HelloWorld = () => {
    return <Button label='Hello World' />
}

// for React 16/17
import ReactDOM from 'react-dom';
ReactDOM.render(<HelloWorld />, document.getElementById('root'));

// for React 18
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<HelloWorld />);
```

## License

MIT License. Copyright (c) 2022, Sandeep Gupta.


<!-- Do not add any visible content below this line -->

[reactjs]: https://reactjs.org/
[typescript]: https://www.typescriptlang.org/
[bootstrap]: https://getbootstrap.com/
