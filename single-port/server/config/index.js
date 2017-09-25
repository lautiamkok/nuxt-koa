'use strict'

const database = {
  host: 'localhost',
  port: 27017,
  dbname: process.env.NODE_ENV === 'test' ? 'koatest' : 'koa'
}

// module.exports = { // ES5
export default {
  app: {
    name: 'Koa',
    version: '1.0.0'
  },
  database: {
    host: database.host,
    port: database.port,
    dbname: database.dbname,
    username: 'admin',
    password: '123456',
    url: 'mongodb://' + database.host + ':' + database.port + '/' + database.dbname,
    options: {
      max: 100,
      min: 1
    },
    collections: {
    }
  },
  server: {
    port: 3000
  },
  static_dir: {
    root: './static',
    options: {}
  },
  session: {
    secretKey: 'myKoajsSecretKey'
  }
}
