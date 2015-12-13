var express = require('express');
var bodyParser = require('body-parser')
var slashCommands = require('./slashCommands/slashCommands');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/commands', slashCommands);

app.get('/', function(request, response) {
  response.send("It's alive!");
});

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;
});
