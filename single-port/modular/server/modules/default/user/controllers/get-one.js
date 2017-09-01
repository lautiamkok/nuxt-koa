'use strict'

import User from '../models/user'

export default async (ctx) => {
  var name = ctx.params.name
  if (name === undefined) {
    ctx.throw(400, 'name is required.')
  }

  let options = {
    name: name
  }

  let data
  let user = new User()

  // Find a doc.
  const userDocument = await user.findOne(options)
  data = JSON.stringify(userDocument)

  return data
}
