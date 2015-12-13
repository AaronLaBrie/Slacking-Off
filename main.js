var express = require('express');
var bodyParser = require('body-parser')
var challengeApp = require('./challengeApp/routes');
var challengeAPI = require('./challengeAPI/routes');
var slashCommands = require('./slashCommands/routes');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.urlencoded({ extended: false }));

//Serve the react app unless otherwise specified. Let it handle routing.
app.use('/*', challengeApp);
app.use('/challengeAPI', challengeAPI);
app.use('/commands', slashCommands);

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;
});
