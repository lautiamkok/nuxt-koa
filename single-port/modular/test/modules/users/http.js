'use strict'

import app from 'index'
import supertest from 'supertest'
import assert from 'assert'

const request = supertest.agent(app)

// Get test
describe('GET /api/users', function () {
  it('status code should be 200', function (done) {
    request
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})

// Post test
describe('POST /api/users', function () {
  it('status code should be 400', function (done) {
    request
      .post('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, {
        status: 400,
        message: 'name is required.'
      }, done)
  })
})

var _id
var name
describe('POST /api/users with data', function () {
  it('status code should be 200', function (done) {
    request
      .post('/api/users')
      .type('form')
      .send({name: 'tommy'})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        console.log(res.body)
        if (err) return done(err)

        name = res.body.ops[0].name.toString()
        _id = res.body.ops[0]._id.toString()

        assert.equal(name, 'tommy')

        done()
      })
  })
})

// GET one test
describe('GET /api/users/:name', function () {
  it('status code should be 200', function (done) {
    request
      .get('/api/users/' + name)
      .expect('Content-Type', /json/)
      // .expect(200, {
      //   id: null,
      //   name: 'tom'
      // }, done)
      // or:
      .expect(200)
      .end(function(err, res) {
        console.log(res.body)
        if (err) return done(err)

        name = res.body.name.toString()
        assert.equal(name, 'tommy')

        done()
      })
  })
})

// Put test
describe('PUT /api/users', function () {
  it('status code should be 400', function (done) {
    request
      .put('/api/users')
      .type('form')
      .send({})
      .expect('Content-Type', /json/)
      .expect(400, {
        status: 400,
        message: '_id is required.'
      }, done)
  })
})

describe('PUT /api/users with data', function () {
  it('status code should be 200', function (done) {
    request
      .put('/api/users')
      .type('form')
      .send({
        _id: _id,
        name: 'tobias'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        console.log(res.body)
        if (err) return done(err)

        const name = res.body.value.name.toString()
        assert.equal(name, 'tobias')

        done()
      })
  })
})

// Delete test
describe('DELETE /api/users', function () {
  it('status code should be 400', function (done) {
    request
      .delete('/api/users')
      .type('form')
      .send({})
      .expect('Content-Type', /json/)
      .expect(400, {
        status: 400,
        message: '_id is required.'
      }, done)
  })
})

describe('DELETE /api/users with data', function () {
  it('status code should be 200', function (done) {
    request
      .delete('/api/users')
      .type('form')
      .send({ _id: _id })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        console.log(res.body)
        if (err) return done(err)

        const ok = res.body.ok
        assert(ok , 1)

        done()
      })
  })
})
