'use strict'

import Router from 'koa-trie-router'

const router = new Router()

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

// Dummy users.
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

export default (app) => {

  // Home page.
  router.get('/', middleware1, middleware2, middleware3, async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = {
      message: 'Hello World!'
    }
  })

  // Get all users.
  router.get('/users', async (ctx, next) => {
    ctx.type = 'json'
    ctx.body = users
  })

  // Get the user by id.
  router.get('/users/:id', async (ctx, next) => {
    const id = parseInt(ctx.params.id)
    console.log(users[id])
    if (id >= 0 && id < users.length) {
      ctx.body = users[id]
    } else {
      ctx.throw(404)
    }
  })

  return router.middleware()
}
