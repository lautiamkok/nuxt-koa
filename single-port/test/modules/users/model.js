'use strict'

import app from 'index'
import supertest from 'supertest'
import assert from 'assert'
import Mongo from 'database/mongo'
import User from 'default/user/models/user'

const request = supertest.agent(app)

// https://mochajs.org/#synchronous-code
// https://mochajs.org/#hooks
describe('User', function () {
  let mongo
  let db
  let collection
  let user
  let _id
  let name
  let result

  // Runs before all tests in this block.
  before(async function () {
    mongo = new Mongo()
    db = await mongo.connect()
    collection = db.collection('users')

    // Removes a collection or view from the database. The method also removes
    // any indexes associated with the dropped collection. The method provides a
    // wrapper around the drop command.
    // https://docs.mongodb.com/manual/reference/method/db.collection.drop/
    // https://docs.mongodb.com/manual/reference/method/db.collection.remove/
    collection.drop()
  })

  // Runs after all tests in this block.
  after(async function () {
    collection.drop()
  })

  // Runs before each test in this block.
  beforeEach(async function () {
    user = new User()
  })

  // Test insert().
  describe('#insert()', function () {
    it('should insert without error', async function () {
      console.log(user)
      result = await user.insert({ id: ' 1234', name: 'jane' })
      console.log(result)

      name = result.ops[0].name.toString()
      _id = result.ops[0]._id.toString()

      assert.equal(name, 'jane')
    })
  })

  // Test find()
  describe('#find()', function () {
    it('should find without error', async function () {
      result = await user.find()
      assert.equal(result.length, 1)
    })
  })

  // Test findOne()
  describe('#findOne()', function () {
    it('should find one without error', async function () {
      result = await user.findOne({ name: name })
      console.log(result)

      name = result.name
      assert.equal(name, 'jane')
    })
  })

  // Test findOneAndUpdate()
  describe('#findOneAndUpdate()', function () {
    it('should find one and update without error', async function () {
      result = await user.findOneAndUpdate(
        { _id: user.objectId(_id), name: name },
        { name: 'janey' },
        { returnOriginal: false }
      )
      console.log(result)

      name = result.value.name
      assert.equal(name, 'janey')
    })
  })

  // Test remove()
  let data
  let ok
  let parsed
  describe('#remove()', function () {
    it('should find one and update without error', async function () {
      result = await user.remove({ _id: user.objectId(_id)})
      data = JSON.stringify(result)
      console.log(data)

      parsed = JSON.parse(data)
      ok = parsed.ok
      assert.equal(ok, 1)
    })
  })
})
