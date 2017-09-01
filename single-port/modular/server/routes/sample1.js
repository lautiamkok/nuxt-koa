'use strict'

import Router from 'koa-trie-router'

const router = new Router()

// How to pass object into router - wrap the router in a function.
// https://stackoverflow.com/questions/27340538/how-to-pass-the-configured-passport-object-into-the-routes-modules-in-express4
export default (io) => {
  router.get('/', async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = {
      message: 'Hello sample 1!'
    }
  })
  return router.middleware()
}
