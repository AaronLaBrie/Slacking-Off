//Deps
var express = require('express');
var bodyParser = require('body-parser')
var challengeAPI = require('./challengeAPI');
var slashCommands = require('./slashCommands');

//DB stuff
var monk = require('monk')
var db = monk(process.env.MONGOLAB_URI);

var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/challengeAPI', challengeAPI);
app.use('/commands', slashCommands);

//404 if nothing else got hit.
app.use(function(req, res){
  res.status(404).send('404: Not Found');
});

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server up! 🎉")
});
