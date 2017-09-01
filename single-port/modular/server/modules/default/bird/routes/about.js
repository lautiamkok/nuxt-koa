'use strict'

const Router = require('koa-trie-router')

const router = new Router()

// define the home page route
router.get('/about', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    message: 'Birds about page'
  }
})

export default router.middleware()
