'use strict'

const Router = require('koa-trie-router')

const router = new Router()

// middleware that is specific to this router
const middleware3 = async (ctx, next) => {
  console.log('Time: ', Date.now())
  await next()
}

const middleware1 = async(ctx, next) => {
  console.log("I'll be logged first. ")
  await next()
  console.log("I'll be logged last. ")
}

const middleware2 = async(ctx, next) => {
  console.log("I'll be logged second. ")
  await next()
  console.log("I'll be logged third. ")
}

export default (io) => {
  router.get('/', middleware1, middleware2, middleware3, async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = {
      message: 'Hello home sample!'
    }
  })
  return router.middleware()
}
