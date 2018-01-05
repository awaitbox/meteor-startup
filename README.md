
@awaitbox/meteor-startup
========================

Await for Meteor's environment to be ready.

This assumes the `Meteor` global variable is available, and works on the client
or the server.

The `meteorStartup` async function returns a promise that will resolve when
Meteor's environment is ready, or resolves immediately if `startup` already
happened.

Learn more about the `Meteor.startup` event [in Meteor's
docs](https://docs.meteor.com/api/core.html#Meteor-startup).

You can use it in async functions:

```js
import meteorStartup from '@awaitbox/meteor-startup'

async function main() {
  await meteorStartup()
  console.log( 'Ready to begin awesome!' )
}

main()
```

You can of course use it as a Promise:

```js
import meteorStartup from '@awaitbox/meteor-startup'

meteorStartup()
  .then( data => console.log( 'begin awesome!' ) )
```

Chain values will pass through if you use it in a Promise chain:

```js
import meteorStartup from '@awaitbox/meteor-startup'

fetch( ... )
  .then( ... )
  .then( meteorStartup ) // passes data through
  .then( data => console.log( 'use data for the awesome!', data ) )
```

Note
----

This is written in ES2016+ JavaScript. To use this in pre-ES2016 environments,
you'll need to run this through a transpiler like [Babel](http://babeljs.io)
(and I recommend using the
[fast-async](https://github.com/MatAtBread/fast-async) plugin to get the best
results). See some tips here on wiring it up with
[Webpack](https://webpack.js.org): http://2ality.com/2017/06/pkg-esnext.html.
