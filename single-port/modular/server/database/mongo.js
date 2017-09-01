'use strict'

import mongodb from 'mongodb'
import config from 'config'

export default class Mongo {
  constructor () {
    this.db = null
    this.objectId = mongodb.ObjectID
  }

  async connect () {
    // Use connect method to connect to the Server
    this.db = await mongodb.connect(config.database.url)
    return this.db
  }

  close () {
    this.db.close()
  }
}
