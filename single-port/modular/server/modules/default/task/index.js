'use strict'

import Router from 'koa-trie-router'
import get from './routes/get'
import post from './routes/post'
import put from './routes/put'
import del from './routes/delete'

const router = new Router()

export default (io) => {
  router.get(get(io))
  router.post(post(io))
  router.put(put)
  router.del(del)
  return router.middleware()
}
