'use strict'

import Router from 'koa-trie-router'

const router = new Router()

export default (io) => {
  router.get('/', async(ctx, next) => {
    ctx.type = 'json'
    ctx.body = {
      message: 'Hello from trees!'
    }
  })

  return router.middleware()
}
