<template>
  <div>
    <span>
      <ul id="messages">
        <li v-for="message in messages">{{message}}</li>
      </ul>
    </span>
    <!-- the submit event will no longer reload the page -->
    <form v-on:submit.prevent="submitMessage">
      <input id="m" autocomplete="off" v-model="inputMessage"/>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import socket from '~/plugins/socket.io'

socket.on('news', function (data) {
  console.log('server message received: ' + data)
  socket.emit('my other event', { my: 'data' })
})

export default {
  layout: 'dark', // you can set a custom layout here.
  async asyncData () {
    let data = await axios.get('/api/tasks')
    console.log(data.data)

    return {
      inputMessage: '',
      messages: ['hello']
    }
  },
  head () {
    return {
      title: 'Users'
    }
  },
  created () {
    socket.on('chat.message', function(data) {
      this.messages.push(data)
      console.log(this.messages)
    }.bind(this))
  },
  methods: {
    submitMessage() {
      socket.emit('chat.message', this.inputMessage)
      this.inputMessage = ''
    }
  }
}
</script>

<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font: 13px Helvetica, Arial; }
  form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
  form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
  form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
  #messages { list-style-type: none; margin: 0; padding: 0; }
  #messages li { padding: 5px 10px; }
  #messages li:nth-child(odd) { background: #eee; }
</style>
