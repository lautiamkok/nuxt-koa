<template>
  <div>
    <h1>{{ message }}</h1>
    <p>This is Nuxt + Koa.</p>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let {data} = await axios.get('/api')
    console.log(data.data)
    return data.data
  },
  head () {
    return {
      title: 'Nuxt + Koa'
    }
  }
}
</script>

<style>
h1 {
  font-size: 40px;
}

p {
  font-size: 20px;
}
</style>
