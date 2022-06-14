Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

```js
<Alert variant='primary'>A simple primary alert.</Alert>
<Alert variant='secondary'>A simple secondary alert.</Alert>
<Alert variant='success'>A simple success alert.</Alert>
<Alert variant='danger'>A simple danger alert.</Alert>
<Alert variant='warning'>A simple warning alert.</Alert>
<Alert variant='info'>A simple info alert.</Alert>
<Alert variant='light'>A simple light alert.</Alert>
<Alert variant='dark'>A simple dark alert.</Alert>
```

Alerts can also be set to show a cross-button to dismiss them.

```js
<Alert closeable={true} onClose={() => alert('alert dismissed') }>A dismissable alert.</Alert>
```
