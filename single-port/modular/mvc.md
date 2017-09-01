Model–view–controller
==========

# model
The model is the central component of the pattern. It expresses the application's behavior in terms of the problem domain, independent of the user interface.[6] It directly manages the data, logic and rules of the application.

# view
A view can be any output representation of information, such as a chart or a diagram. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.

# controller
The third part, the controller, accepts input and converts it to commands for the model or view.

A model stores data that is retrieved according to commands from the controller and displayed in the view.
A view generates new output to the user based on changes in the model.
A controller can send commands to the model to update the model's state (e.g., editing a document). It can also send commands to its associated view to change the view's presentation of the model (e.g., scrolling through a document, movement of document)

* https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller

## Example

"user clicked the 'delete this item' button" in the interface should basically just call the controller's "delete" function. The controller, however, has no idea what the view looks like, and so your view must collect some information such as, "which item was clicked?"

In a conversation form:

View: "Hey, controller, the user just told me he wants item 4 deleted."
Controller: "Hmm, having checked his credentials, he is allowed to do that... Hey, model, I want you to get item 4 and do whatever you do to delete it."
Model: "Item 4... got it. It's deleted. Back to you, Controller."
Controller: "Here, I'll collect the new set of data. Back to you, view."
View: "Cool, I'll show the new set to the user now."

In the end of that section, you have an option: either the view can make a separate request, "give me the most recent data set", and thus be more pure, or the controller implicitly returns the new data set with the "delete" operation.

* https://stackoverflow.com/questions/1015813/what-goes-into-the-controller-in-mvc

# How to structure your NodeJS Models

Example:

``` bash
/** schemas.js **/

schemas = {
  user: {
    id: null,
    name: null,
    password: null
  }
}

module.exports = schemas;
```

``` bash
/** user.js **/
var db = require("./db.js");
var schemas = require("./schemas.js");
var _ = require("lodash");

var User = function (data) {
    this.data = this.sanitize(data);
}

User.prototype.data = {}

User.prototype.changeName = function (name) {
    this.data.name = name;
}

User.prototype.get = function (name) {
    return this.data[name];
}

User.prototype.set = function (name, value) {
    this.data[name] = value;
}

User.prototype.sanitize = function (data) {
    data = data || {};
    schema = schemas.user;
    return _.pick(_.defaults(data, schema), _.keys(schema));
}

User.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    db.get('users', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
}

User.findById = function (id, callback) {
    db.get('users', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new User(data));
    });
}

module.exports = User;
```

* https://github.com/timjrobinson/nodejsmodels
* http://timjrobinson.com/how-to-structure-your-nodejs-models-2/
* https://stackoverflow.com/questions/41875617/building-enterprise-app-with-node-express
* https://lodash.com/
