'use strict'

import User from '../models/user'

export default async (ctx) => {

  let body = ctx.request.body || {}
  if (body.name === undefined) {
    // Throw the error.
    ctx.throw(400, 'name is required.')
  }

  let document = {
    id: 'xxx', // to be done
    name: body.name
  }

  let data
  let user = new User({ id: '124', name: 'hahahahaha', password: 'gskgsgjs' })

  // Inject a doc.
  const result = await user.insert(document)
  const userId = result.ops[0]._id.toString()

  data = JSON.stringify(result)

  return data
}
