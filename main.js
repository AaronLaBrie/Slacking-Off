var express = require('express');
var bodyParser = require('body-parser')
var digitizer = require('./controllers/digitizer');
var flipper = require('./controllers/flipper');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
  response.send("It's alive!");
});

app.post('/digitizer', digitizer.digitizer);
app.post('/flipper', flipper.flipper);

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;
});
