var challenges = require('./challenges');
var users = require('./users');
var express = require('express');

module.exports = (function() {
  var app = express.Router();

  app.get('/users', users.getUsers);
  app.post('/users', users.newUser);
  app.get('/users/:id', users.getUser);
  app.post('/users/:id', users.updateUser);
  app.delete('/users/:id', users.deleteUser);

  return app;
})();
