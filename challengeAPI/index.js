var challenges = require('./challenges');
var users = require('./users');
var express = require('express');

module.exports = (function() {
  var app = express.Router();

  app.get('/users', users.getUsers);

  return app;
})();
