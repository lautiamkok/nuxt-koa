'use strict'

import Router from 'koa-trie-router'
import getAll from './routes/get-all'
import getOne from './routes/get-one'
import postOne from './routes/post-one'
import putOne from './routes/put-one'
import delOne from './routes/delete-one'

const router = new Router()

export default (io) => {
  router.get(getAll(io))
  router.get(getOne(io))
  router.post(postOne(io))
  router.put(putOne)
  router.del(delOne)
  return router.middleware()
}
