Mocha + ES6
===========

# Example

```bash
// package.json
"scripts": {
  "test": "mocha --compilers js:babel-core/register ./test/**/*.spec.js"
}
```

```bash
// .babelrc
{
  "presets": ["es2015"]
}
```

# workflow

```bash
           spec files written in
           plain ES6 JavaScript
             |
             |
mocha ---> reading the files
             |
babel ---> compiles the files
           from ES6 to ES5
             |
mocha ---> running the tests
             |
             |
           test results
```

# References

* http://krasimirtsonev.com/blog/article/using-mocha-with-es6-spec-files
* http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/
* https://stackoverflow.com/questions/33793504/using-webpack-aliases-in-mocha-tests

Recursive Vs Modular Testing
===========

1. To test specific module only, e.g. home:

```bash
"scripts": {
    "test": "NODE_PATH=./server:./server/modules mocha ./test/modules/home/*.js --compilers js:babel-core/register",
    ...
}
```

2. To test all modules recursively:

```bash
"scripts": {
    "test": "NODE_PATH=./server:./server/modules mocha --compilers js:babel-core/register --recursive",
    ...
}
```

# Sample

If you have the test file, e.g. test.js in the test root directory:

```bash
import app from '../server/index'
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
```

But, when you create a test file in a module, since you have set `NODE_PATH=./server`, then change:

```
import app from '../server/index'
```

To:

```
import app from 'index'
```
