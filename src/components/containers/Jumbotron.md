A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.

```js
<Jumbotron>
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</Jumbotron>
```

To make the jumbotron full width, and without rounded corners, set the `fluid` prop to `false`. You may want to add a `Container` inside the `Jumbotron` to provide adequate padding inside.

```js
<Jumbotron fluid={true}>
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4" />
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</Jumbotron>
```
