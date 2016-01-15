var digitizer = require('./digitizer');
var donger = require('./donger');
var flipper = require('./flipper');
var giffer = require('./giffer');
var express = require('express');

module.exports = (function() {
  var app = express.Router();

  app.post('/digitizer', digitizer);
  app.post('/donger', donger);
  app.post('/flipper', flipper);
  app.post('/giffer', giffer);

  return app;
})();
