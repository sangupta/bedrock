Used to display a list of colors horizontally.

You can pass the `colors` as an array of strings:

```js
<ColorBar colors={[ '#CC0E0E', '#118935','#9E6A6F' ]} />
```

Or, you can pass as an array of objects:

```js
<ColorBar colors={[
    { color : '#CC0E0E', label : 'A' },
    { color : '#118935', label : 'B' },
    { color : '#9E6A6F', label : 'C' }
]} />
```
