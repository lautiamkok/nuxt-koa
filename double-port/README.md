Nuxt + Koa
===========

A basic sample Nuxt application with Koa.

Koa handles the controller and the model as an API. Nuxt handles the view and calls the API, e.g http://127.0.0.1:3000/ (from Nuxt) will call http://127.0.0.1:3030/api (from Koa).

Quick start
=============

## Build Setup (Koa/ API)

``` bash
# Dependencies
$ npm install

# Development
$ npm run dev

# Production build
$ npm start
```

Access it at http://localhost:3030/

## Build Setup (Nuxt)

``` bash
# Dependencies
$ npm install

# Development
$ npm run dev

# Production build
$ npm start
```

Access it at http://localhost:3000/

Notes
=============

1. For this approach, you must run these two apps concurrently.

References
=============

* https://nuxtjs.org/guide/commands/

