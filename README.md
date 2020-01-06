# Bedrock React Components

[![Build Status](https://img.shields.io/travis/sangupta/bedrock.svg?style=flat-square)](https://travis-ci.org/sangupta/bedrock)
[![Netlify Status](https://img.shields.io/netlify/a8029857-1dd5-43b6-90cf-817ec5ee925e?style=flat-square)](https://app.netlify.com/sites/elastic-mcnulty-1ba012/deploys)

React Component Library based on Bootstrap UI kit. It has no external
dependencies except the `React` framework. Bedrock leverages `typescript` 
for added type-safety.

## Usage

Using `Bedrock` involves the following 3 steps:

* Include Bootstrap and Bedrock CSS in your index.html

```html
<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

<link rel="stylesheet" type="text/css" href="https://bedrock.sangupta.com/assets/css/bedrock.css">
```

* Define `bedrock` as a dependency in your `package.json`

```sh
# using npm
$ npm install --save @sangupta/bedrock

# using yarn
$ yarn add @sangupta/bedrock
```
* Use bedrock components

```js
import * as React from 'react';
import { Button } from '@sangupta/bedrock';

export default class TestComponent extends React.Component<any, any> {

    render() {
        return <Button>Hello World</Button>;
    }

}
```

## Augmentation

* `as` can change a `button` to an `anchor`

## Hacking

Bedrock uses `npm` as the package manager, and [microbundle](https://github.com/developit/microbundle) as the module packager. `yarn` should just work correctly.

Clone the repository, and install the dependencies:

```sh
$ git clone git@github.com/sangupta/bedrock.git
$ npm install
```

### Development Server

Bedrock uses `styleguide` which in-turn uses `webpack` for the development
server. To start the development server with documentation, fire:

```sh
$ npm run styleguide
```

Open http://localhost:6060 to access the component documentation. To publish the styleguide documentation, fire:

```sh
$ nm run build-docs
```

### Publishing a build

To publish the build, fire:

```sh
# clean up previous builds
$ rm -rf dist

# generate micro-bundles
$ npm run build

# publish to npm
$ npm publish
```

## Comparison with similar frameworks

Bedrock is different from frameworks like [React Bootstrap](https://react-bootstrap.github.io/) and [React Strap](https://reactstrap.github.io/) in the following ways:

* Built entirely using [Typescript](https://www.typescriptlang.org/)
* No external dependencies
* Minimal code for complex components
* Bedrock prefers to leverage CSS caching to improve performance and reduce JS size. Thus, CSS files are to be directly included from a CDN (for Bootstrap and FontAwesome)

## Thanks

Many thanks to the following projects from which code has been borrowed into the library:

* LoadingDots - https://projects.lukehaas.me/css-loaders/

## References

Below sites and code-bases have been referenced in building **Bedrock**:

* https://baseweb.design/components
* https://mineral-ui.com
* https://pinterest.github.io/gestalt
* https://react.semantic-ui.com
* https://v2.grommet.io/components
* https://onsen.io/v2/guide/react/
* https://atlaskit.atlassian.com/packages/core/avatar

## License

Apache License v2.
