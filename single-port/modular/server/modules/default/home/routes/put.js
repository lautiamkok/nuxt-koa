'use strict'

const Router = require('koa-trie-router')

const router = new Router()

router.put('/', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    message: 'Hello put home sample!'
  }
})
export default router.middleware()
