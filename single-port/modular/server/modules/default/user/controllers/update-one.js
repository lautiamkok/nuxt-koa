'use strict'

import User from '../models/user'

export default async (ctx) => {
  let user = new User()

  let body = ctx.request.body || {}
  if (body._id === undefined) {
    // Throw the error.
    // https://github.com/koajs/koa/blob/master/docs/api/context.md#ctxthrowstatus-msg-properties
    ctx.throw(400, '_id is required.')

    // is equivalent to:
    // const err = new Error('_id is required.');
    // err.status = 400;
    // err.expose = true;
    // throw err;
  }

  if (body.name === undefined) {
    // Throw the error.
    ctx.throw(400, 'name is required.')
  }

  let find = {
    _id: user.objectId(body._id)
  }
  let update = {
    name: body.name
  }
  let options = {
    returnOriginal: false
  }
  let data

  // Inject a doc.
  const result = await user.findOneAndUpdate(find, update, options)

  data = JSON.stringify(result)

  return data
}
