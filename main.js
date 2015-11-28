var express = require('express');
var bodyParser = require('body-parser')
var digitizer = require('./controllers/digitizer');
var flipper = require('./controllers/flipper');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/digitizer', digitizer.digitizer);
app.post('/flipper', flipper.flipper);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
