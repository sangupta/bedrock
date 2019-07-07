Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).

While containers can be nested, most layouts do not require a nested container.

```js
<Container>
    <div style={{width: '100%', height: '100px', 'backgroundColor' : 'lightblue'}}>
    </div>
</Container>
```

A full-width repsonsive container:

```js
<Container fluid={true} >
    <div style={{width: '100%', height: '100px', 'backgroundColor' : 'lightblue'}}>
    </div>
</Container>
```
