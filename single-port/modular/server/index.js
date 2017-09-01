'use strict'

import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import socket from 'socket.io'
import http from 'http'
import config from './config'
import middlewares from './middlewares'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || config.server.port

// Import and Set Nuxt.js options
let nuxtConfig = require('../nuxt.config.js')
nuxtConfig.dev = !(app.env === 'production')

// Instantiate nuxt.js
const nuxt = new Nuxt(nuxtConfig)

// Build in development
if (nuxtConfig.dev) {
  const builder = new Builder(nuxt)
  builder.build().catch(e => {
    console.error(e) // eslint-disable-line no-console
    process.exit(1)
  })
}

// Socket io hoook up.
const server = http.createServer(app.callback())
const io = socket(server)

// Middlewares are imported here.
middlewares(app, io)

// Hook Nuxt up!
// https://github.com/nuxt-community/koa-template/blob/master/template/server/index.js
app.use(ctx => {
  ctx.status = 200 // koa defaults to 404 when it sees that status is unset

  return new Promise((resolve, reject) => {
    ctx.res.on('close', resolve)
    ctx.res.on('finish', resolve)
    nuxt.render(ctx.req, ctx.res, promise => {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject)
    })
  })
})

// server.listen(port, host)

// For unit test, it's important to export the http.Server object returned by
// app.listen(3000) instead of just the function app, otherwise you will get
// TypeError: app.address is not a function.
// https://stackoverflow.com/questions/33986863/mocha-api-testing-getting-typeerror-app-address-is-not-a-function
module.exports = server.listen(port, host)
