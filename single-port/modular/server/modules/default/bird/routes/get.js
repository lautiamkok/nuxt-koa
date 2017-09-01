'use strict'

const Router = require('koa-trie-router')

const router = new Router()

// middleware that is specific to this router
router.use(async (ctx, next) => {
  console.log('Time: ', Date.now())
  await next()
})

// define the home page route
router.get('/', async (ctx, next) => {
  ctx.type = 'json'
  ctx.body = {
    message: 'Birds home page'
  }
})

export default router.middleware()
