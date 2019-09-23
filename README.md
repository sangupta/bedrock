# Bedrock

React Component Library based on Bootstrap UI kit. It has no external
dependencies except the `React` framework. Bedrock leverages `typescript` 
for added type-safety.

## Augmentation

* `as` can change a `button` to an `anchor`

## Hacking

Bedrock uses `npm` as the package manager, and [ParcelJS](https://parceljs.org/) 
as the application bundler. For installation of `ParcelJS` follow the instructions
[here](https://parceljs.org/getting_started.html).

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

To publish the builde, fire:

```sh
$ npm run build
```

## Comparison with similar frameworks

Bedrock is different from frameworks like [React Bootstrap](https://react-bootstrap.github.io/) and [React Strap](https://reactstrap.github.io/) in the following ways:

* Built entirely using [Typescript](https://www.typescriptlang.org/)
* No external dependencies
* Minimal code for complex components

## Thanks

Many thanks to the following from which ideas/code have been borrowed:

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
