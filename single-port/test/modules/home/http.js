'use strict'

import app from 'index'
import supertest from 'supertest'
import assert from 'assert'

const request = supertest.agent(app)

describe('GET /api', function () {
  it('status code should be 200', function (done) {
    request
      .get('/api')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
