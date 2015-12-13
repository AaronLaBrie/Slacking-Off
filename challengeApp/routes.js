var react = require('./react');
var express = require('express');

module.exports = (function() {
  var app = express.Router();

  app.get('/*', react);

  return app;
})();
