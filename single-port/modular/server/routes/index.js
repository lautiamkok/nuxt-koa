'use strict'

import Router from 'koa-trie-router'
import mount from 'koa-mount'

// Import routes from different modules.
import home from 'default/home'
import bird from 'default/bird'
import user from 'default/user'
import task from 'default/task'
import tree from 'default/tree'

// You can flatten the routes by keeping them in the same location as the index
// routes (index.js)
import sample1 from './sample1'
import sample2 from './sample2'

const router = new Router()

export default (io) => {
  // Add Routes.
  router.use(mount('/', home(io)))
  router.use(mount('/birds', bird(io)))
  router.use(mount('/users', user(io)))
  router.use(mount('/tasks', task(io)))
  router.use(mount('/trees', tree(io)))
  router.use(mount('/sample1', sample1(io)))

  // Note the difference in sample1(io) where the case you need to pass things
  // into the route. In this route, you just use it like this below or
  // `sample2.middleware()` if you do `export default router` instead of `export
  // default router.middleware()` in this route.
  router.use(mount('/sample2', sample2))

  return router.middleware()
}
