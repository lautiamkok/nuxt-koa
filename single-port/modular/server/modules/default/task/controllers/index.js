'use strict'

import mongodb from 'mongodb'
import config from 'config'
import { example1, example2 } from 'utils'
// Or, option 2:
// import utils from '../utils'

// https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node
const objectId = mongodb.ObjectID

export default async (ctx) => {
  console.log(await example1())
  console.log(await example2())
  // Or, option 2:
  // console.log(await utils.example1())
  // console.log(await utils.example1())

  /**
   * Non-middleware db connection.
   */

  let data

  // Use connect method to connect to the Server
  const db = await mongodb.connect(config.database.url)
  // console.log('Connected correctly to server')

  // Get the collection.
  const collectionUsers = db.collection('users')

  // Inject a doc.
  const result = await collectionUsers.insert({ name: 'haha' })
  const userId = result.ops[0]._id.toString()

  // Find all docs.
  const userDocuments = await collectionUsers.find().toArray()
  data = JSON.stringify(userDocuments)

  // Delete a doc by id.
  collectionUsers.remove({_id: objectId(userId)})
  // or:
  // collectionUsers.remove({_id: new mongodb.ObjectID(userId)})

  db.close()
  // console.log('db closed')

  return data
}

// Sample:
// module.exports = {
//   // index action
//   index: (ctx) => {
//     return ctx.render('index', {
//       name: 'Hello World!'
//     })
//   }
// }
