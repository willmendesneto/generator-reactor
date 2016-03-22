# generator-reactor

[![Build Status](https://snap-ci.com/willmendesneto/generator-reactor/branch/master/build_image)](https://snap-ci.com/willmendesneto/generator-reactor/branch/master)

> Yeoman generator for [ReactJS](http://facebook.github.io/react/) - lets you quickly set up a project including karma test runner and [Webpack](http://webpack.github.io/) module system. Using NPM Scripts, Karma and WebPack by default.


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
* [reactor:class](#class)

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

import React from 'react';

import './Checkup.scss';

export default class Checkup extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <p>Content for Checkup</p>
      </div>
    );
  }
}

```

And `test/spec/components/Foo.js` (*javascript - jasmine*):
```
'use strict';

import Foo from 'components/Foo';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Foo',  () => {
  let renderedComponent;

  beforeEach(() => {
    let node = document.createElement('div');
    renderedComponent = ReactDOM.render(<Foo />, node);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(document);
  });

  it('should create a new instance of Foo', function () {
    expect(renderedComponent).toBeDefined();
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
 'use strict';

 import React from 'react';

 import './Foo.scss';

 export default class Foo extends React.Component {

   constructor(props, context) {
     super(props, context);
   }

   getInitialState() {
      return({});
   }

   getDefaultProps() {}
   componentWillMount() {}
   componentDidMount() {}
   shouldComponentUpdate() {}
   componentDidUpdate() {}
   componentWillUnmount() {}

   render() {
     return (
       <div>
         <p>Content for Foo</p>
       </div>
     );
   }
 }

 ````

Just remove those you don't need, then fill and space out the rest.



### Class

Generates a [JSX](http://facebook.github.io/react/docs/jsx-in-depth.html) component in `src/scripts/components`, its corresponding test in `src/spec/components` and its style in `src/style`.

Example:
```bash
yo reactor:component foo  //or just: yo reactor:c foo
```

Produces `src/components/Foo.js` (*javascript - JSX*):
```
'use strict';

import React from 'react';

import './Foo.scss';

export default class Foo extends React.createClass({

  render() {
    return (
      <div>
        <p>Content for Checkup-class</p>
      </div>
    );
  }
});


```

And `test/spec/components/Foo.js` (*javascript - jasmine*):
```
'use strict';

import Foo from 'components/Foo';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Foo',  () => {
  let renderedComponent;

  beforeEach(() => {
    let node = document.createElement('div');
    renderedComponent = ReactDOM.render(<Foo />, node);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(document);
  });

  it('should create a new instance of Foo', function () {
    expect(renderedComponent).toBeDefined();
  });

});

```

### Create stylesheet of class

You can add a stylesheet file for your new class using - `style` flag:

```bash
yo reactor:class foo --style
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
'use strict';

import React from 'react';

import './Foo.scss';

export default class Foo extends React.createClass({

  getInitialState() {
    return({});
  },

  getDefaultProps() {},
  componentWillMount() {},
  componentDidMount() {},
  shouldComponentUpdate() {},
  componentDidUpdate() {},
  componentWillUnmount() {},

  render() {
    return (
      <div>
        <p>Content for Foo</p>
      </div>
    );
  }
});

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

var ActActionCreators = {

}

export default ActActionCreators;

```
And if it's **Reflux**:
```
'use strict';

import Reflux from 'reflux';

const BarActionCreators  =  Reflux.createActions([

]);


export default BarActionCreators;
```

and same test for both architectures:
```
'use strict';

import action from 'actions/BarActionCreators';

describe('BarActionCreators', () => {

  it('should be defined', () => {
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

import {EventEmitter} from 'events';
import assign from 'object-assign';
import BazStoreDispatcher from '../dispatcher/BazStoreDispatcher';

let BazStore = assign({}, EventEmitter.prototype, {});

BazStore.dispatchToken = BazStoreDispatcher.register( action => {

  switch(action.type) {
    default:
  }

});

export default BazStore;


module.exports = BazStore;
```
And if it's **Reflux**:
```
'use strict';

import Reflux from 'reflux';
import Actions from 'actions/..';

const BazStore = Reflux.createStore({
  listenables: Actions,
});

export default BazStore;

```

and same test for both architectures:
```
'use strict';

import BazStore from 'stores/BazStoreDispatcher';

describe('BazStore', () => {
  it('should be defined', () => {
    expect(classedName).toBeDefined();
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

## Testing

Running `npm test` will run the unit tests with karma. Tests are written using [Jasmine](http://jasmine.github.io/) by default.

## Further Information

### Modules

Each component is a module and can be required using the [Webpack](http://webpack.github.io/) module system. [Webpack](http://webpack.github.io/) uses [Loaders](http://webpack.github.io/docs/loaders.html) which means you can also require CSS and a host of other file types. Read the [Webpack documentation](http://webpack.github.io/docs/home.html) to find out more.

### NPM Scripts

Out the box, the generator uses [npm scripts](https://docs.npmjs.com/misc/scripts) configured with the following:

1. **webpack**: uses the [webpack](https://webpack.github.io/) to load all required modules and output to a single JS file `src/scripts/components/main.js`. This is included in the `src/index.html` file by default and will reload in the browser as and when it is recompiled.
2. **webpack-dev-server**: uses the [webpack-dev-server](https://github.com/webpack/webpack-dev-server) to watch for file changes and also serve the webpack app in development.
3. **karma**: uses the [karma](https://karma-runner.github.io/0.13/index.html) to load the Karma configuration file `karma.conf.js` located in the project root. This will run all tests using [PhantomJS](http://phantomjs.org/) by default but supports many other browsers.
4. **editorconfig-tools**: check and validate all files application (`src` and `test` folders) based in `.editorconfig` params.

### Stylesheet

Included in the project with options:

- CSS;
- SASS;
- SCSS;
- LESS;
- STYLUS;

### Running Tests

`npm test`
