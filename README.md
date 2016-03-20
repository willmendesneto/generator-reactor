# generator-reactor [![Build Status](https://snap-ci.com/willmendesneto/generator-reactor/branch/master/build_image)](https://snap-ci.com/willmendesneto/generator-reactor/branch/master)

> Yeoman generator for [ReactJS](http://facebook.github.io/react/) - lets you quickly set up a project including karma test runner and [Webpack](http://webpack.github.io/) module system. Using Grunt, Bower and WebPack by default.


## Example

[http://willmendesneto.github.io/generator-reactor/](http://willmendesneto.github.io/generator-reactor/)


## Usage

Install `generator-reactor`:
```
npm install -g generator-reactor
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo reactor`, optionally passing an app name:
```
yo reactor [app-name]
```

Run `npm run build` for building and `npm run start-dist` for preview in the browser at [localhost](http://localhost:8000).


## Generators

Available generators:

* [reactor](#app) (aka [reactor:app](#app))
* [reactor:component](#component)

and for **Flux** or **Reflux** :
* [reactor:action](#action)
* [reactor:store](#store)


### App

Sets up a new ReactJS app, generating all the boilerplate you need to get started. The app generator also facilitates the following:

1. Configures Webpack to modularise the app enabling [loading of various file formats](http://webpack.github.io/docs/loader-list.html) e.g. JSON, CSS, PNG, etc.
2. Configures [Karma](http://karma-runner.github.io) to run all tests.
3. Watches for changes and recompiles JS and refreshes the browser.

Example:
```bash
yo reactor
```

### Component

Generates a [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) component in `src/scripts/components`, its corresponding test in `src/spec/components` and its style in `src/style`.

Example:
```bash
yo reactor:component foo  //or just: yo reactor:c foo
```

Produces `src/components/Foo.js` (*javascript - JSX*):
```
'use strict';

var React = require('react/addons');

require('styles/componentName.css'); //or .sass,.less etc...

var Foo = React.createClass({
  render: function () {
    return (
        <div>
          <p>Content for Foo</p>
        </div>
      )
  }
});

module.exports = Foo;
```

And `test/spec/components/Foo.js` (*javascript - jasmine*):
```
'use strict';

describe('Foo', function () {
  var Foo, component;

  beforeEach(function () {
    Foo = require('../../../src/components/Foo');
    component = Foo();
  });

  it('should create a new instance of Foo', function () {
    expect(component).toBeDefined();
  });
});
```

### Create stylesheet of component

You can add a stylesheet file for your new component using - `style` flag:

```bash
yo reactor:c foo --style
```

And `src/styles/Foo.css` (or .sass, .less etc...) will be created:

```
.Foo{
  border: 1px dashed #f00;
}
```

### rich flag

For all you lazy programmers out there, we've added another shortcut - `rich` flag:
```bash
yo reactor:c foo --rich
```
This will give you all of react component's most common stuff :
 ````
 var React = require('react/addons');

 require('styles/Foofoo.sass');

 var Foofoo = React.createClass({
   mixins: [],
   getInitialState: function() { return({}) },
   getDefaultProps: function() {},
   componentWillMount: function() {},
   componentDidMount: function() {},
   shouldComponentUpdate: function() {},
   componentDidUpdate: function() {},
   componentWillUnmount: function() {},

   render: function () {
     return (
         <div>
           <p>Content for Foofoo</p>
         </div>
       );
   }
 });

 module.exports = Foofoo;
 ````

Just remove those you don't need, then fill and space out the rest.




### Action

When using Flux or Reflux architecture, it generates an actionCreator in `src/actions` and it's corresponding test in `src/spec/actions`.

Example:
```bash
yo reactor:action bar //or just: yo reactor:a bar
```
Will create a file - `src/actions/BarActionCreators.js`

if 'architecture' is **Flux**, it Produces :
```
'use strict';

var BarActionCreators = {

}

module.exports = BarActionCreators;
```
And if it's **Reflux**:
```
'use strict';

var Reflux = require('reflux');

var BarActionCreators  =  Reflux.createActions([

]);


module.exports = BarActionCreators;
```

and same test for both architectures:
```
'use strict';

describe('BarActionCreators', function() {
  var action;

  beforeEach(function() {
    action = require('actions/BarActionCreators.js');
  });

  it('should be defined', function() {
    expect(action).toBeDefined();
  });
});
```

### Store

When using Flux or Reflux architecture, it generates a store in `src/stores` and it's corresponding test in `src/spec/stores`.

Example:
```bash
yo reactor:store baz //or just: yo reactor:s baz
```
Will create a file - `src/stores/BazStore.js`

if 'architecture' is **Flux**, it Produces :
```
'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var MainAppDispatcher = require('../dispatcher/MainAppDispatcher');

var BazStore = assign({}, EventEmitter.prototype, {

});

BazStore.dispatchToken = MainAppDispatcher.register(function(action) {

  switch(action.type) {
    default:
  }

});

module.exports = BazStore;
```
And if it's **Reflux**:
```
'use strict';

var Reflux = require('reflux');
//var Actions = require('actions/..');


var BazStore = Reflux.createStore({
  listenables: Actions,


});

module.exports = BazStore;
```

and same test for both architectures:
```
'use strict';

describe('BazStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/BazStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
```


## Options
Options are available as additional installs to the initial application generation phase.

### [ReactRouter](https://github.com/rackt/react-router)

A complete routing library for React. This option only adds the basic hooks to get started with [react router](https://github.com/rackt/react-router).

### styles language

css, sass, scss, less or stylus

Sets the style file's template and extension

### architecture

[flux](https://facebook.github.io/flux/) or [reflux](https://github.com/spoike/refluxjs)

### es6

If you are using `es6`, and want to use its export functionality (and not webpack's), just add `--es6` flag when you create a component, action or srore.


## Testing

Running `npm test` will run the unit tests with karma. Tests are written using [Jasmine](http://jasmine.github.io/) by default.

## Further Information

### Project Structure

The reactor generator automates the setup of a [ReactJS](http://facebook.github.io/react/) project using the specific structure detailed below:

```
project
  - src
    -components
      MainApp.js
      Foo.js
      AnotherComponent.js

    //for flux/reflux
    -actions
      BarActionCreators.js
    -stores
      BazStore.js
    //for flux
    -dispatcher
      FooAppDispatcher

    - styles
      main.css
    index.html
  - test
    - spec
      - components
         MainApp.js
         Foo.js
         AnotherComponent.js

      //for flux/reflux
      -actions
        BarActionCreators.js
      -stores
        BazStore.js

    - helpers
      - react
        addons.js
      phantomjs-shims.js
  Makefile
  karma.conf.js
  package.json
  webpack.config.js
  webpack.development.js
  webpack.production.js
```

I have tried to keep the project structure as simple as possible and understand it may not suit everyone.

### Naming Components

I have opted to follow [@floydophone](https://twitter.com/floydophone) convention of uppercase for component file naming e.g. [Component.js](https://github.com/petehunt/ReactHack/tree/master/src/components). I am open to suggestions if there is a general objection to this decision.

### Modules

Each component is a module and can be required using the [Webpack](http://webpack.github.io/) module system. [Webpack](http://webpack.github.io/) uses [Loaders](http://webpack.github.io/docs/loaders.html) which means you can also require CSS and a host of other file types. Read the [Webpack documentation](http://webpack.github.io/docs/home.html) to find out more.

### NPM Scripts

Out the box, the generator uses [npm scripts](https://docs.npmjs.com/misc/scripts) configured with the following:

1. **webpack**: uses the [webpack](https://webpack.github.io/) to load all required modules and output to a single JS file `src/scripts/components/main.js`. This is included in the `src/index.html` file by default and will reload in the browser as and when it is recompiled.
2. **webpack-dev-server**: uses the [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to watch for file changes and also serve the webpack app in development.
3. **karma**: uses the [karma](https://github.com/karma-runner/grunt-karma) to load the Karma configuration file `karma.conf.js` located in the project root. This will run all tests using [PhantomJS](http://phantomjs.org/) by default but supports many other browsers.
4. **editorconfig-tool**: check and validate all files application (`src` and `test` folders) based in `.editorconfig` params.

### CSS

Included in the project is the [normalize.css](http://necolas.github.io/normalize.css/) script. There is also a `src/styles/main.css` script that's required by the core `src/components/App.js` component using Webpack.

## Contribute

Contributions are welcomed. When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

### Running Tests

`node node_modules/.bin/mocha`
