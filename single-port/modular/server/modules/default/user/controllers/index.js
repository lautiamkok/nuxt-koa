'use strict'

import User from '../models/user'
import { example1, example2 } from 'utils'
// Or, option 2:
// import utils from '../utils'

export default async (ctx) => {
  console.log(await example1())
  console.log(await example2())
  // Or, option 2:
  // console.log(await utils.example1())
  // console.log(await utils.example1())

  let data
  let user = new User()

  // Find all docs.
  const userDocuments = await user.find()
  data = JSON.stringify(userDocuments)

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
