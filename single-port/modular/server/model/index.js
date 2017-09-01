'use strict'

import Mongo from 'database/mongo'

export default class Model {
  constructor (options) {
    this.data = {}
  }

  objectId (_id) {
    // https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node
    const mongo = new Mongo()
    const objectId = mongo.objectId
    return objectId(_id)
  }

  async db () {
    const mongo = new Mongo()
    const connection = await mongo.connect()
    return connection
  }
}
