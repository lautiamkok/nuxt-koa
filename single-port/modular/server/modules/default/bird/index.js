'use strict'

import Router from 'koa-trie-router'
import get from './routes/get'
import about from './routes/about'
import post from './routes/post'
import put from './routes/put'
import del from './routes/delete'

const router = new Router()

export default (io) => {
  router.get(get)
  router.get(about)
  router.post(post(io))
  router.put(put)
  router.del(del)
  return router.middleware()
}
