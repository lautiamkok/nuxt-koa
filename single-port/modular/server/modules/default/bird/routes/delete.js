'use strict'

const Router = require('koa-trie-router')

const router = new Router()

router.del('/', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    message: 'Hello del sample!'
  }
})
export default router.middleware()
