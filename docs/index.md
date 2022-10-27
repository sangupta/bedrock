# Bedrock UI Component Library

Bedrock is a [React][1] component library built entirely in [Typescript][2]
and uses [Bootstrap][3] for the UI styles. Instead of using CSS in JS, `bedrock`
exports a modified CSS file, `bedrock.css` that applications need to import
in their HTML page directly.

`bedrock` has no external dependencies.

## Usage

Using Bedrock involves the following 3 steps:

* Include `bedrock.css` in your `index.html`
* Define `bedrock` as a dependency in your `package.json`
* Use bedrock components, as simply as, `import { Button } from 'bedrock';`

## License

All code is licensed under the MIT License.

[1]: https://reactjs.org/
[2]: https://www.typescriptlang.org/
[3]: https://getbootstrap.com/
