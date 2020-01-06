# Bedrock React Components

[![Netlify Status](https://api.netlify.com/api/v1/badges/a8029857-1dd5-43b6-90cf-817ec5ee925e/deploy-status)](https://app.netlify.com/sites/elastic-mcnulty-1ba012/deploys)

React Component Library based on Bootstrap UI kit. It has no external
dependencies except the `React` framework. Bedrock leverages `typescript` 
for added type-safety.

## Usage

Using `Bedrock` involves the following 3 steps:

* Include Bootstrap CSS in your index.html
* Include FontAwesome CSS in your index.html
* Define `bedrock` as a dependency in your `package.json`
* Use bedrock components

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

Open http://localhost:6060 to access the component documentation.

### Publishing a build

To publish the build, fire:

```sh
$ npm run build
```

To publish the styleguide documentation, fire:

```sh
$ nm run build-docs
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
