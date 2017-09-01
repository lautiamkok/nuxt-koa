'use strict'

import Router from 'koa-trie-router'
import controller from '../controllers/update-one'

const router = new Router()

router.put('/', async (ctx, next) => {
  let result
  try {
    result = await controller(ctx, next)
  } catch (err) {
    // Get the error message and do something.
    // console.log(err)

    // Throw the error.
    ctx.throw(500, err)
  }
  ctx.type = 'json'
  ctx.body = result
})
export default router.middleware()
