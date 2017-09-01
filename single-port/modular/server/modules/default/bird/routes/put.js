'use strict'

const Router = require('koa-trie-router')

const router = new Router()

router.put('/', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    message: 'Hello put sample!'
  }
})
export default router.middleware()
