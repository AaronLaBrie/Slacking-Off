// Deps
var app = require('express')()
var bodyParser = require('body-parser')
var slashCommands = require('./slashCommands')

app.set('port', (process.env.PORT || 3000))

// Slack posts using urlencoded data
app.use(bodyParser.urlencoded({ extended: false }))

// Auth step, check the team identity
app.use(function (req, res, next) {
  console.log(req.body)
  next()
})

// Base route for the slash commands
app.use('/commands', slashCommands)

// 404 if nothing else got hit.
app.use(function (req, res) {
  res.status(404).send('404: Not Found')
})

var server = app.listen(app.get('port'), function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Server up! 🎉')
})
