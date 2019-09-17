### Basic sign-in page

```js
<div className='bedrock-docs-fullpage'>
    <SignInPage imageUrl='https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg'
                imageWidth='72'
                imageHeight='72'
                onSignIn={(user, password, rememberMe) => {
                    console.log('User clicked sign-in with params: ', user, password, rememberMe);
                }}
                footerText='(c) 2000 - 2019' />
</div>
```
