require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("koa-trie-router");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _model = __webpack_require__(27);

var _model2 = _interopRequireDefault(_model);

var _utils = __webpack_require__(30);

var _schemas = __webpack_require__(32);

var _schemas2 = _interopRequireDefault(_schemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_Model) {
  _inherits(User, _Model);

  function User(options) {
    _classCallCheck(this, User);

    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, options));
    // The rules for ES2015 (ES6) classes basically come down to: // 1. In a child
    // class constructor, this cannot be used until super is called. // 2. ES6 class
    // constructors MUST call super if they are subclasses, or they must explicitly
    // return some object to take the place of the one that was not initialized. //
    // https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes#toc-creating-subclasses-with-extends-calling-with-super //
    // https://stackoverflow.com/questions/31067368/javascript-es6-class-extend-without-super


    _this.data = (0, _utils.sanitize)(options, _schemas2.default.user);
    return _this;
  }

  _createClass(User, [{
    key: 'insert',
    value: async function insert(options) {
      var result = void 0;

      var data = options || this.data;
      this.data = (0, _utils.sanitize)(data, _schemas2.default.user);

      // Get the db connection.
      var db = await _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), 'db', this).call(this);

      // Get the collection.
      var collectionUsers = db.collection('users');

      result = await collectionUsers.insert(this.data);
      db.close();

      return result;
    }
  }, {
    key: 'find',
    value: async function find(options) {
      var result = void 0;

      // Get the db connection.
      var db = await _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), 'db', this).call(this);

      // Get the collection.
      var collectionUsers = db.collection('users');

      result = await collectionUsers.find(options).toArray();
      db.close();

      return result;
    }

    // https://docs.mongodb.com/manual/reference/method/db.collection.findOne/

  }, {
    key: 'findOne',
    value: async function findOne(options) {
      var result = void 0;

      // Get the db connection.
      var db = await _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), 'db', this).call(this);

      // Get the collection.
      var collectionUsers = db.collection('users');

      result = await collectionUsers.findOne(options,
      // Specify the Fields to Return.
      // "The _id field is always included unless you explicitly exclude it."
      // https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/#suppress-id-field
      { name: 1, id: 1, _id: 0

        // Return All but the Excluded Fields
        // { _id: 0 }
      });
      db.close();

      return result;
    }

    // https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/

  }, {
    key: 'findOneAndUpdate',
    value: async function findOneAndUpdate(filter, update, options) {
      var result = void 0;

      // Get the db connection.
      var db = await _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), 'db', this).call(this);

      // Get the collection.
      var collectionUsers = db.collection('users');

      var filter = filter || {};
      var update = { $set: update } || {};
      var options = options || {
        // The Node.js driver documentation doesn't mention a returnNewDocument
        // option for findOneAndUpdate() (which is an option for the MongoDB shell
        // command with the same name).
        // Instead, it mentions an option called returnOriginal, which defaults to
        // true. Try using that option, setting it to false to return the updated
        // document instead of the original.
        // https://stackoverflow.com/questions/35626040/findoneandupdate-used-with-returnnewdocumenttrue-returns-the-original-document
        returnOriginal: false
      };

      result = await collectionUsers.findOneAndUpdate(filter, update, options);
      console.log(result);
      db.close();

      return result;
    }
  }, {
    key: 'remove',
    value: async function remove(options) {
      var result = void 0;

      // Get the db connection.
      var db = await _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), 'db', this).call(this);

      // Get the collection.
      var collectionUsers = db.collection('users');

      // collectionUsers.remove({_id: objectId(userId)})
      result = collectionUsers.remove(options);
      db.close();

      return result;
    }
  }]);

  return User;
}(_model2.default);

// Export as an object.
// https://stackoverflow.com/questions/45919511/es6-how-to-export-object-without-its-functions
// export default {
//   data: {},

//   sanitize (options) {
//   },

//   async insert (options) {
//   },

//   async find (options) {
//   },

//   async remove (options) {
//   }
// }

// Export using prototype.
// var User = function (data) {
//     this.data = this.sanitize(data);
// }

// User.prototype.data = {}

// User.prototype.changeName = function (name) {
//     this.data.name = name;
// }

// User.prototype.get = function (name) {
//     return this.data[name];
// }

// User.prototype.set = function (name, value) {
//     this.data[name] = value;
// }

// User.prototype.sanitize = function (data) {
//     data = data || {};
//     schema = schemas.user;
//     return _.pick(_.defaults(data, schema), _.keys(schema));
// }

// User.prototype.save = function (callback) {
//     var self = this;
//     this.data = this.sanitize(this.data);
//     db.get('users', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
//         if (err) return callback(err);
//         callback(null, result);
//     });
// }

// User.findById = function (id, callback) {
//     db.get('users', {id: id}).run(function (err, data) {
//         if (err) return callback(err);
//         callback(null, new User(data));
//     });
// }

// module.exports = User;


exports.default = User;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var database = {
  host: 'localhost',
  port: 27017,
  dbname: 'koa'

  // module.exports = { // ES5
};exports.default = {
  app: {
    name: 'Koa',
    version: '1.0.0'
  },
  database: {
    host: database.host,
    port: database.port,
    dbname: database.dbname,
    username: 'admin',
    password: '123456',
    url: 'mongodb://' + database.host + ':' + database.port + '/' + database.dbname,
    options: {
      max: 100,
      min: 1
    },
    collections: {}
  },
  server: {
    port: 3000
  },
  static_dir: {
    root: './static',
    options: {}
  },
  session: {
    secretKey: 'myKoajsSecretKey'
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa-mount");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _koa = __webpack_require__(5);

var _koa2 = _interopRequireDefault(_koa);

var _nuxt = __webpack_require__(6);

var _socket = __webpack_require__(7);

var _socket2 = _interopRequireDefault(_socket);

var _http = __webpack_require__(8);

var _http2 = _interopRequireDefault(_http);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _middlewares = __webpack_require__(9);

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || _config2.default.server.port;

// Import and Set Nuxt.js options
var nuxtConfig = __webpack_require__(54);
nuxtConfig.dev = !(app.env === 'production');

// Instantiate nuxt.js
var nuxt = new _nuxt.Nuxt(nuxtConfig);

// Build in development
if (nuxtConfig.dev) {
  var builder = new _nuxt.Builder(nuxt);
  builder.build().catch(function (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
}

// Socket io hoook up.
var server = _http2.default.createServer(app.callback());
var io = (0, _socket2.default)(server);

// Middlewares are imported here.
(0, _middlewares2.default)(app, io);

// Hook Nuxt up!
// https://github.com/nuxt-community/koa-template/blob/master/template/server/index.js
app.use(function (ctx) {
  ctx.status = 200; // koa defaults to 404 when it sees that status is unset

  return new Promise(function (resolve, reject) {
    ctx.res.on('close', resolve);
    ctx.res.on('finish', resolve);
    nuxt.render(ctx.req, ctx.res, function (promise) {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject);
    });
  });
});

// server.listen(port, host)

// For unit test, it's important to export the http.Server object returned by
// app.listen(3000) instead of just the function app, otherwise you will get
// TypeError: app.address is not a function.
// https://stackoverflow.com/questions/33986863/mocha-api-testing-getting-typeerror-app-address-is-not-a-function
module.exports = server.listen(port, host);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// All middlewares are used here.
// Check other Koa official middlewares: https://github.com/koajs

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaStatic = __webpack_require__(10);

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaBodyparser = __webpack_require__(11);

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, io) {
  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(async function (ctx, next) {
    try {
      await next();

      // Handle 404 - throw it as an error.
      if (ctx.status === 404 && ctx.res.headersSent === false) {
        ctx.throw(404);
      }

      // Use this when you want to format the 200 res further.
      // e.g. {"status":200,"data":{"message":"Hello home sample!"}}
      // else, you get, e.g. {"message":"Hello home sample!"}
      // if (ctx.status === 200 && ctx.res.headersSent === false) {
      //   ctx.body = {
      //     status: 200,
      //     data: ctx.body
      //   }
      // }
    } catch (err) {
      ctx.status = err.status || 500;

      ctx.type = 'json';
      ctx.body = {
        status: ctx.status,
        message: err.message
      };

      ctx.app.emit('error', err, ctx);
    }
  });

  // Static files are files that clients download as they are from the server.
  // Create a new directory, public. Koa, by default doesn't allow you to
  // serve static files.
  // https://github.com/koajs/static
  // https://www.tutorialspoint.com/koajs/koajs_static_files.htm
  app.use((0, _koaStatic2.default)(_config2.default.static_dir.root));

  // The parsed body will store in ctx.request.body
  // If nothing was parsed, body will be an empty object {}
  // https://github.com/koajs/bodyparser
  // https://github.com/koajs/koa/issues/719
  app.use((0, _koaBodyparser2.default)());

  // Attach socket io object to ctx.
  app.use(async function (ctx, next) {
    ctx.io = io;
    await next();
  });

  // Add routes by group.
  var mount = __webpack_require__(3);
  app.use(mount('/api', (0, _routes2.default)(io)));
  //
  // Or without group:
  // app.use(routes(io))
  //
  // Or directly:
  // app.use(sample(io))
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _koaMount = __webpack_require__(3);

var _koaMount2 = _interopRequireDefault(_koaMount);

var _home = __webpack_require__(13);

var _home2 = _interopRequireDefault(_home);

var _bird = __webpack_require__(18);

var _bird2 = _interopRequireDefault(_bird);

var _user = __webpack_require__(24);

var _user2 = _interopRequireDefault(_user);

var _task = __webpack_require__(42);

var _task2 = _interopRequireDefault(_task);

var _tree = __webpack_require__(47);

var _tree2 = _interopRequireDefault(_tree);

var _sample = __webpack_require__(52);

var _sample2 = _interopRequireDefault(_sample);

var _sample3 = __webpack_require__(53);

var _sample4 = _interopRequireDefault(_sample3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can flatten the routes by keeping them in the same location as the index
// routes (index.js)
var router = new _koaTrieRouter2.default();

// Import routes from different modules.

exports.default = function (io) {
  // Add Routes.
  router.use((0, _koaMount2.default)('/', (0, _home2.default)(io)));
  router.use((0, _koaMount2.default)('/birds', (0, _bird2.default)(io)));
  router.use((0, _koaMount2.default)('/users', (0, _user2.default)(io)));
  router.use((0, _koaMount2.default)('/tasks', (0, _task2.default)(io)));
  router.use((0, _koaMount2.default)('/trees', (0, _tree2.default)(io)));
  router.use((0, _koaMount2.default)('/sample1', (0, _sample2.default)(io)));

  // Note the difference in sample1(io) where the case you need to pass things
  // into the route. In this route, you just use it like this below or
  // `sample2.middleware()` if you do `export default router` instead of `export
  // default router.middleware()` in this route.
  router.use((0, _koaMount2.default)('/sample2', _sample4.default));

  return router.middleware();
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _get = __webpack_require__(14);

var _get2 = _interopRequireDefault(_get);

var _post = __webpack_require__(15);

var _post2 = _interopRequireDefault(_post);

var _put = __webpack_require__(16);

var _put2 = _interopRequireDefault(_put);

var _delete = __webpack_require__(17);

var _delete2 = _interopRequireDefault(_delete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

exports.default = function (io) {
  router.get((0, _get2.default)(io));
  router.post((0, _post2.default)(io));
  router.put(_put2.default);
  router.del(_delete2.default);
  return router.middleware();
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

// middleware that is specific to this router
var middleware3 = async function middleware3(ctx, next) {
  console.log('Time: ', Date.now());
  await next();
};

var middleware1 = async function middleware1(ctx, next) {
  console.log("I'll be logged first. ");
  await next();
  console.log("I'll be logged last. ");
};

var middleware2 = async function middleware2(ctx, next) {
  console.log("I'll be logged second. ");
  await next();
  console.log("I'll be logged third. ");
};

exports.default = function (io) {
  router.get('/', middleware1, middleware2, middleware3, async function (ctx, next) {
    ctx.type = 'json';
    ctx.body = {
      message: 'Hello home sample!'
    };
  });
  return router.middleware();
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

exports.default = function (io) {
  router.post('/', async function (ctx, next) {
    ctx.type = 'json';
    ctx.body = {
      message: 'Hello post home sample!'
    };
  });
  return router.middleware();
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

router.put('/', async function (ctx, next) {
  ctx.type = 'json';
  ctx.body = {
    message: 'Hello put home sample!'
  };
});
exports.default = router.middleware();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

router.del('/', async function (ctx, next) {
  ctx.type = 'json';
  ctx.body = {
    message: 'Hello del home sample!'
  };
});
exports.default = router.middleware();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _get = __webpack_require__(19);

var _get2 = _interopRequireDefault(_get);

var _about = __webpack_require__(20);

var _about2 = _interopRequireDefault(_about);

var _post = __webpack_require__(21);

var _post2 = _interopRequireDefault(_post);

var _put = __webpack_require__(22);

var _put2 = _interopRequireDefault(_put);

var _delete = __webpack_require__(23);

var _delete2 = _interopRequireDefault(_delete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

exports.default = function (io) {
  router.get(_get2.default);
  router.get(_about2.default);
  router.post((0, _post2.default)(io));
  router.put(_put2.default);
  router.del(_delete2.default);
  return router.middleware();
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

// middleware that is specific to this router
router.use(async function (ctx, next) {
  console.log('Time: ', Date.now());
  await next();
});

// define the home page route
router.get('/', async function (ctx, next) {
  ctx.type = 'json';
  ctx.body = {
    message: 'Birds home page'
  };
});

exports.default = router.middleware();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

// define the home page route
router.get('/about', async function (ctx, next) {
  ctx.type = 'json';
  ctx.body = {
    message: 'Birds about page'
  };
});

exports.default = router.middleware();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

exports.default = function (io) {
  router.post('/', async function (ctx, next) {
    ctx.type = 'json';
    ctx.body = {
      message: 'Hello post sample!'
    };
  });
  return router.middleware();
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

router.put('/', async function (ctx, next) {
  ctx.type = 'json';
  ctx.body = {
    message: 'Hello put sample!'
  };
});
exports.default = router.middleware();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

router.del('/', async function (ctx, next) {
  ctx.type = 'json';
  ctx.body = {
    message: 'Hello del sample!'
  };
});
exports.default = router.middleware();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _getAll = __webpack_require__(25);

var _getAll2 = _interopRequireDefault(_getAll);

var _getOne = __webpack_require__(34);

var _getOne2 = _interopRequireDefault(_getOne);

var _postOne = __webpack_require__(36);

var _postOne2 = _interopRequireDefault(_postOne);

var _putOne = __webpack_require__(38);

var _putOne2 = _interopRequireDefault(_putOne);

var _deleteOne = __webpack_require__(40);

var _deleteOne2 = _interopRequireDefault(_deleteOne);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

exports.default = function (io) {
  router.get((0, _getAll2.default)(io));
  router.get((0, _getOne2.default)(io));
  router.post((0, _postOne2.default)(io));
  router.put(_putOne2.default);
  router.del(_deleteOne2.default);
  return router.middleware();
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _controllers = __webpack_require__(26);

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

exports.default = function (io) {
  router.get('/', async function (ctx, next) {
    var result = void 0;
    try {
      result = await (0, _controllers2.default)(ctx, next);
    } catch (err) {
      // Get the error message and do something.
      // console.log(err.message)

      // Throw the error.
      ctx.throw(500, err);
    }
    ctx.type = 'json';
    ctx.body = result;
  });

  return router.middleware();
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

var _utils = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Or, option 2:
// import utils from '../utils'

exports.default = async function (ctx) {

  console.log((await (0, _utils.example1)()));
  console.log((await (0, _utils.example2)()));
  // Or, option 2:
  // console.log(await utils.example1())
  // console.log(await utils.example1())

  var data = void 0;
  var user = new _user2.default();

  // Find all docs.
  var userDocuments = await user.find();
  data = JSON.stringify(userDocuments);

  return data;
};

// Sample:
// module.exports = {
//   // index action
//   index: (ctx) => {
//     return ctx.render('index', {
//       name: 'Hello World!'
//     })
//   }
// }

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongo = __webpack_require__(28);

var _mongo2 = _interopRequireDefault(_mongo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(options) {
    _classCallCheck(this, Model);

    this.data = {};
  }

  _createClass(Model, [{
    key: 'objectId',
    value: function objectId(_id) {
      // https://stackoverflow.com/questions/17545311/correct-way-to-search-for-mongodb-entries-by-id-in-node
      var mongo = new _mongo2.default();
      var objectId = mongo.objectId;
      return objectId(_id);
    }
  }, {
    key: 'db',
    value: async function db() {
      var mongo = new _mongo2.default();
      var connection = await mongo.connect();
      return connection;
    }
  }, {
    key: 'insert',
    value: async function insert(options) {
      //
    }
  }, {
    key: 'find',
    value: async function find(options) {
      //
    }
  }, {
    key: 'remove',
    value: async function remove(options) {
      //
    }
  }]);

  return Model;
}();

exports.default = Model;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongodb = __webpack_require__(29);

var _mongodb2 = _interopRequireDefault(_mongodb);

var _config = __webpack_require__(2);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mongo = function () {
  function Mongo() {
    _classCallCheck(this, Mongo);

    this.db = null;
    this.objectId = _mongodb2.default.ObjectID;
  }

  _createClass(Mongo, [{
    key: 'connect',
    value: async function connect() {
      // Use connect method to connect to the Server
      this.db = await _mongodb2.default.connect(_config2.default.database.url);
      return this.db;
    }
  }, {
    key: 'close',
    value: function close() {
      this.db.close();
    }
  }]);

  return Mongo;
}();

exports.default = Mongo;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitize = undefined;

var _lodash = __webpack_require__(31);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sanitize(options, schema) {
  var data = options || {};

  if (schema === undefined) {
    // ctx is not passed into this level so can't do:
    // ctx.throw(400, '_id is required.')
    // So use a native error and throw it.
    var err = new Error('Schema is required.');
    err.status = 400;
    err.expose = true;
    throw err;
  }

  // Get the keys from the object.
  // https://lodash.com/docs/4.17.4#keys
  var keys = _lodash2.default.keys(schema);

  // Source objects are applied from left to right. Once a property is set,
  // additional values of the same property are ignored.
  // https://lodash.com/docs/4.17.4#defaults
  var defaults = _lodash2.default.defaults(data, schema);

  // Creates an object composed of the picked object properties.
  // https://lodash.com/docs/4.17.4#pick
  // let picked = lodash.pick(data, keys)
  var picked = _lodash2.default.pick(defaults, keys);

  return picked;
}

exports.sanitize = sanitize;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  user: {
    id: null,
    name: null
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
async function example1() {
  return 'example 1';
}

async function example2() {
  return 'example 2';
}

// module.exports = { example1, example2 }
// or:
exports.example1 = example1;
exports.example2 = example2;

// Or:
// https://stackoverflow.com/questions/45781063/nodejs-how-group-and-export-multiple-functions-in-a-separate-file
// export const example1 = async () => {
//    return 'example 1'
// }

// export const example2 = async () => {
//    return 'example 2'
// }

// Or:
// export default {
//   async example1 () {
//     return 'example 1'
//   },
//   async example2 () {
//     return 'example 2'
//   }
// }

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _getOne = __webpack_require__(35);

var _getOne2 = _interopRequireDefault(_getOne);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

exports.default = function (io) {
  router.get('/:name', async function (ctx, next) {
    var result = void 0;
    try {
      result = await (0, _getOne2.default)(ctx, next);
    } catch (err) {
      // Get the error message and do something.
      // console.log(err.message)

      // Throw the error.
      ctx.throw(500, err);
    }
    ctx.type = 'json';
    ctx.body = result;
  });

  return router.middleware();
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function (ctx) {

  var name = ctx.params.name;
  if (name === undefined) {
    ctx.throw(400, 'name is required.');
  }

  var options = {
    name: name
  };

  var data = void 0;
  var user = new _user2.default();

  // Find a doc.
  var userDocument = await user.findOne(options);
  data = JSON.stringify(userDocument);

  return data;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _postOne = __webpack_require__(37);

var _postOne2 = _interopRequireDefault(_postOne);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

exports.default = function (io) {
  router.post('/', async function (ctx, next) {
    var result = void 0;
    try {
      result = await (0, _postOne2.default)(ctx, next);
    } catch (err) {
      // Get the error message and do something.
      // console.log(err.message)

      // Throw the error.
      ctx.throw(500, err);
    }
    ctx.type = 'json';
    ctx.body = result;
  });
  return router.middleware();
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function (ctx) {

  var body = ctx.request.body || {};
  if (body.name === undefined) {
    // Throw the error.
    ctx.throw(400, 'name is required.');
  }

  var document = {
    id: 'xxx', // to be done
    name: body.name
  };

  var data = void 0;
  var user = new _user2.default({ id: '124', name: 'hahahahaha', password: 'gskgsgjs' });

  // Inject a doc.
  var result = await user.insert(document);
  var userId = result.ops[0]._id.toString();

  data = JSON.stringify(result);

  return data;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _updateOne = __webpack_require__(39);

var _updateOne2 = _interopRequireDefault(_updateOne);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

router.put('/', async function (ctx, next) {
  var result = void 0;
  try {
    result = await (0, _updateOne2.default)(ctx, next);
  } catch (err) {
    // Get the error message and do something.
    // console.log(err)

    // Throw the error.
    ctx.throw(500, err);
  }
  ctx.type = 'json';
  ctx.body = result;
});
exports.default = router.middleware();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function (ctx) {

  var user = new _user2.default();

  var body = ctx.request.body || {};
  if (body._id === undefined) {
    // Throw the error.
    // https://github.com/koajs/koa/blob/master/docs/api/context.md#ctxthrowstatus-msg-properties
    ctx.throw(400, '_id is required.');

    // is equivalent to:
    // const err = new Error('_id is required.');
    // err.status = 400;
    // err.expose = true;
    // throw err;
  }

  if (body.name === undefined) {
    // Throw the error.
    ctx.throw(400, 'name is required.');
  }

  var find = {
    _id: user.objectId(body._id)
  };
  var update = {
    name: body.name
  };
  var options = {
    returnOriginal: false
  };
  var data = void 0;

  // Inject a doc.
  var result = await user.findOneAndUpdate(find, update, options);

  data = JSON.stringify(result);

  return data;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _deleteOne = __webpack_require__(41);

var _deleteOne2 = _interopRequireDefault(_deleteOne);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

router.del('/', async function (ctx, next) {
  var result = void 0;
  try {
    result = await (0, _deleteOne2.default)(ctx, next);
  } catch (err) {
    // Get the error message and do something.
    // console.log(err.message)

    // Throw the error.
    ctx.throw(500, err);
  }
  ctx.type = 'json';
  ctx.body = result;
});
exports.default = router.middleware();

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async function (ctx) {

  var body = ctx.request.body || {};
  if (body._id === undefined) {
    // Throw the error.
    ctx.throw(400, '_id is required.');
  }

  var data = void 0;
  var user = new _user2.default();

  // Delete a doc by id.
  var result = await user.remove({ _id: user.objectId(body._id) });

  data = JSON.stringify(result);

  return data;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _get = __webpack_require__(43);

var _get2 = _interopRequireDefault(_get);

var _post = __webpack_require__(44);

var _post2 = _interopRequireDefault(_post);

var _put = __webpack_require__(45);

var _put2 = _interopRequireDefault(_put);

var _delete = __webpack_require__(46);

var _delete2 = _interopRequireDefault(_delete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

exports.default = function (io) {
  router.get((0, _get2.default)(io));
  router.post((0, _post2.default)(io));
  router.put(_put2.default);
  router.del(_delete2.default);
  return router.middleware();
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

exports.default = function (io) {
  io.sockets.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
      console.log('user disconnected');
    });
    socket.on('chat.message', function (msg) {
      console.log('message: ' + msg);
      socket.emit('chat.message', msg);
    });

    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log('client message received: ' + data);
    });

    socket.on('message', function (msg) {
      console.log('client message received: ' + msg);
    });
  });

  router.get('/', async function (ctx, next) {
    ctx.type = 'json';
    ctx.body = {};
  });

  return router.middleware();
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

exports.default = function (io) {
  router.post('/', async function (ctx, next) {
    ctx.type = 'json';
    ctx.body = {
      message: 'Hello post sample!'
    };
  });
  return router.middleware();
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

router.put('/', async function (ctx, next) {
  ctx.type = 'json';
  ctx.body = {
    message: 'Hello put sample!'
  };
});
exports.default = router.middleware();

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

router.del('/:name', async function (ctx, next) {
  var name = ctx.params.name;
  console.log(name);
  ctx.type = 'json';
  ctx.body = {
    message: 'Hello del sample!'
  };
});
exports.default = router.middleware();

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

var _get = __webpack_require__(48);

var _get2 = _interopRequireDefault(_get);

var _post = __webpack_require__(49);

var _post2 = _interopRequireDefault(_post);

var _put = __webpack_require__(50);

var _put2 = _interopRequireDefault(_put);

var _delete = __webpack_require__(51);

var _delete2 = _interopRequireDefault(_delete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

exports.default = function (io) {
  router.get((0, _get2.default)(io));
  router.post((0, _post2.default)(io));
  router.put(_put2.default);
  router.del(_delete2.default);
  return router.middleware();
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

exports.default = function (io) {
  router.get('/', async function (ctx, next) {
    ctx.type = 'json';
    ctx.body = {
      message: 'Hello from trees!'
    };
  });

  return router.middleware();
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

// You need to enclose your JSON property inside a JSON object, that's usually
// what APIs are expecting.
// https://stackoverflow.com/questions/28369896/postman-escaping-form-data-to-api-causing-unexpected-token-error

exports.default = function (io) {
  router.post('/', async function (ctx, next) {
    await next();
    ctx.io.emit('chat.message', 'from trees!');
    ctx.type = 'json';
    ctx.body = {
      message: 'Hello trees!'
    };
  });

  router.post('/about', async function (ctx, next) {
    await next();
    ctx.io.emit('chat.message', 'from about trees!');
    ctx.type = 'json';
    ctx.body = {
      message: 'Hello about trees!'
    };
  });
  return router.middleware();
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

router.put('/', async function (ctx, next) {
  ctx.type = 'json';
  ctx.body = {
    message: 'Hello put sample!'
  };
});
exports.default = router.middleware();

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Router = __webpack_require__(0);

var router = new Router();

router.del('/:name', async function (ctx, next) {
  var name = ctx.params.name;
  console.log(name);
  ctx.type = 'json';
  ctx.body = {
    message: 'Hello del sample!'
  };
});
exports.default = router.middleware();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

// How to pass object into router - wrap the router in a function.
// https://stackoverflow.com/questions/27340538/how-to-pass-the-configured-passport-object-into-the-routes-modules-in-express4

exports.default = function (io) {
  router.get('/', async function (ctx, next) {
    ctx.type = 'json';
    ctx.body = {
      message: 'Hello sample 1!'
    };
  });
  return router.middleware();
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaTrieRouter = __webpack_require__(0);

var _koaTrieRouter2 = _interopRequireDefault(_koaTrieRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _koaTrieRouter2.default();

// You can export the router wihout wrapping it in a function if you don't need
// to pass params or objects into this route.
router.get('/', async function (ctx, next) {
  ctx.type = 'json';
  ctx.body = {
    message: 'Hello sample 2!'
  };
});
exports.default = router.middleware();

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://nuxtjs.org/api/configuration-build
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  env: {
    HOST_URL: process.env.HOST_URL || 'http://127.0.0.1:3000'
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css']
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map