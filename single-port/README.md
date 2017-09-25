Nuxt-Koa
===========

A basic sample Koa application + Nuxt.

Koa handles the controller and the model as an API. Nuxt handles the view and calls the API, e.g http://127.0.0.1:3000/ (from Nuxt) will call http://127.0.0.1:3000/api (from Koa).

quick start
=============

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

# Notes

1. During the development, use: `$ npm run dev`

2. [backpack](https://github.com/palmerhq/backpack) is used to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).

Core Dependencies
==========

* [koa-static](https://github.com/koajs/static) - Koa static file serving middleware, wrapper for koa-send.
* [koa-bodyparser](https://github.com/koajs/bodyparser) - A body parser for koa, base on co-body. support json, form and text type body.
* [koa-mount](https://github.com/koajs/mount) - Mount other Koa applications or middleware to a given pathname.
* [trie-router](https://github.com/koajs/trie-router) - Trie routing for Koa based on routington.
* [mongodb](https://github.com/mongodb/node-mongodb-native) - The official MongoDB driver for Node.js. Provides a high-level API on top of mongodb-core that is meant for end users.
* [lodash](https://github.com/lodash/lodash) - A modern JavaScript utility library delivering modularity, performance, & extras.
* [socket.io](https://github.com/socketio/socket.io/) - Socket.IO enables real-time bidirectional event-based communication.
* [nuxt](https://github.com/nuxt/nuxt.js) - A framework for creating Universal Vue.js Applications.
* [axios](https://github.com/mzabriskie/axios) -Promise based HTTP client for the browser and node.js)
* [cross-env](https://github.com/kentcdodds/cross-env) - Run scripts that set and use environment variables across platforms
