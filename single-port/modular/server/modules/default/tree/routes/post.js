'use strict'

import Router from 'koa-trie-router'

const router = new Router()

// You need to enclose your JSON property inside a JSON object, that's usually
// what APIs are expecting.
// https://stackoverflow.com/questions/28369896/postman-escaping-form-data-to-api-causing-unexpected-token-error
export default (io) => {
  router.post('/', async(ctx, next) => {
    await next()
    ctx.io.emit('chat.message', 'from trees!')
    ctx.type = 'json'
    ctx.body = {
      message: 'Hello trees!'
    }
  })

  router.post('/about', async(ctx, next) => {
    await next()
    ctx.io.emit('chat.message', 'from about trees!')
    ctx.type = 'json'
    ctx.body = {
      message: 'Hello about trees!'
    }
  })
  return router.middleware()
}
