# Bedrock React Components

[![Build Status][travis-badge]][travis-url]
[![Netlify Status][netlify-badge]][netlify-url]
[![Version][version-badge]][version-url]
[![Downloads][downloads-badge]][downloads-url]
[![Package License][license-badge]][license-url]
[![PRs welcome][pr-badge]][pr-url]

Bedrock is a [ReactJS][reactjs] component library built entirely using [Typescript][typescript] for type-safety and [Bootstrap 5 (beta)][bootstrap] for UI styling. It also leverages [microbundle][microbundle] for releases, and [React Styleguidist][styleguidist] for component documentation.

## Usage

Using `Bedrock` involves the following 3 steps:

* Include Bootstrap and Bedrock CSS in your index.html

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

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

Bedrock uses `npm` as the package manager, and [microbundle][microbundle] as the module packager. `yarn` should just work correctly.

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

Bedrock is different from frameworks like [React Bootstrap][react-bootstrap] and [React Strap][reactstrap] in the following ways:

* Built entirely using [Typescript][typescript]
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


[npm]: https://www.npmjs.com/
[travis-badge]: https://img.shields.io/travis/sangupta/bedrock.svg?style=flat-square
[travis-url]: https://travis-ci.org/sangupta/bedrock
[netlify-badge]: https://img.shields.io/netlify/a8029857-1dd5-43b6-90cf-817ec5ee925e?style=flat-square
[netlify-url]: https://app.netlify.com/sites/elastic-mcnulty-1ba012/deploys
[version-badge]: https://img.shields.io/npm/v/@sangupta/bedrock.svg?style=flat-square
[version-url]: https://github.com/sangupta/bedrock
[downloads-badge]: https://img.shields.io/npm/dm/@sangupta/bedrock.svg?style=flat-square
[downloads-url]: https://github.com/sangupta/bedrock
[license-badge]: https://img.shields.io/npm/l/@sangupta/bedrock.svg?style=flat-square
[license-url]: https://github.com/sangupta/bedrock/blob/master/LICENSE
[pr-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[pr-url]: http://makeapullrequest.com
[reactjs]: https://reactjs.org/
[typescript]: https://www.typescriptlang.org/
[bootstrap]: https://getbootstrap.com/
[microbundle]: https://github.com/developit/microbundle
[react-bootstrap]: https://react-bootstrap.github.io/
[reactstrap]: https://reactstrap.github.io/
[styleguidist]: https://github.com/styleguidist/react-styleguidist


# May be somewhat related projects

* https://lit-element.polymer-project.org/
* https://material-ui.com/components/drawers/
* https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Drawer/Drawer.js
* https://github.com/codrops
* https://github.com/jtablesaw/tablesaw
* https://github.com/jet-admin
* https://www.jetadmin.io/
* https://material-ui.com/components/tree-view/
* https://primer.style/components/Dropdown
* https://sproutsocial.com/insights/social-media-image-sizes-guide/
* https://johann-s.github.io/bs-stepper/
* https://dialogs.github.io/dialog-web-components/#avatar
* https://everydayhero.github.io/constructicon/#metric
* http://bokuweb.github.io/re-bulma/
* https://github.com/dialogs/dialog-web-components/blob/master/package.json
* https://microsoft.github.io/YamUI/#spinner
* https://hallister.github.io/semantic-react/#Rail
* https://halfapx.com/left-middle-right-layout-with-flexbox-and-float/
