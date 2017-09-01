'use strict'

const Router = require('koa-trie-router')

const router = new Router()

export default (io) => {
  router.post('/', async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = {
      message: 'Hello post home sample!'
    }
  })
  return router.middleware()
}
