var digitizer = require('./digitizer');
var flipper = require('./flipper');
var express = require('express');

module.exports = (function() {
  var app = express.Router();

  app.post('/digitizer', digitizer);
  app.post('/flipper', flipper);

  return app;
})();
