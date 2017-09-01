'use strict'

import Router from 'koa-trie-router'

const router = new Router()

export default (io) => {
  io.sockets.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
    socket.on('chat.message', (msg) => {
      console.log('message: ' + msg)
      socket.emit('chat.message', msg)
    })

    socket.emit('news', { hello: 'world' })
    socket.on('my other event', function (data) {
      console.log('client message received: ' + data)
    })

    socket.on('message', (msg) => {
      console.log('client message received: ' + msg)
    })
  })

  router.get('/', async(ctx, next) => {
    ctx.type = 'json'
    ctx.body = {}
  })

  return router.middleware()
}
