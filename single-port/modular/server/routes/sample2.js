'use strict'

import Router from 'koa-trie-router'

const router = new Router()

// You can export the router wihout wrapping it in a function if you don't need
// to pass params or objects into this route.
router.get('/', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    message: 'Hello sample 2!'
  }
})
export default router.middleware()
