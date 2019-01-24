// Deps
const newrelic = require('newrelic')
const app = require('express')()
const bodyParser = require('body-parser')
const slashCommands = require('./slash-commands')

app.set('port', (process.env.PORT || 3000))

// Slack posts using urlencoded data
app.use(bodyParser.urlencoded({ extended: false }))

// Auth step, check the team identity
app.use((req, res, next) => {
  if (process.env.TEAM_IDS.indexOf(req.body.team_id) < 0) {
    res.status(401).send('Not from an authorized team, sorry brah.')
  } else {
    next()
  }
})

// Base route for the slash commands
app.use('/commands', slashCommands())

// 404 if nothing else got hit.
app.use((req, res) => res.status(404).send('404: Not Found'))

const server = app.listen(app.get('port'), () => console.log('Server up! 🎉'))
