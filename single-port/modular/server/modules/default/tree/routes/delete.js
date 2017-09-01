'use strict'

const Router = require('koa-trie-router')

const router = new Router()

router.del('/:name', async (ctx, next) => {
  let name = ctx.params.name
  console.log(name)
  ctx.type = 'json'
  ctx.body = {
    message: 'Hello del sample!'
  }
})
export default router.middleware()
