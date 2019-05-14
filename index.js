// Deps
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request-promise')

const commands = require('./commands')

const app = express()
app.set('port', process.env.PORT || 3000)

// Slack posts using urlencoded data
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('<a href="https://github.com/AaronLaBrie/slashy">home</a>'))

// Oauth stolen from https://api.slack.com/tutorials/app-creation-and-oauth
app.get('/oauth', (req, res) => {
  const confirmURL =
    `https://slack.com/api/oauth.access?code=${req.query.code}` +
    `&client_id=${process.env.CLIENT_ID}` +
    `&client_secret=${process.env.CLIENT_SECRET}` +
    `&redirect_uri=${process.env.REDIRECT_URI}`

  request({ method: 'GET', uri: confirmURL })
    .then(() => res.send('Success!'))
    .catch(() => res.send('It broke!'))
})

// Base route for the slash commands
app.use('/commands', commands())

// 404 if nothing else got hit.
app.use((req, res) => res.status(404).send('404: Not Found'))

// ping every 5 minutes to stay awake
setInterval(() => request({ method: 'GET', uri: 'https://slashy.herokuapp.com/' }), 300000)

// les go!
app.listen(app.get('port'), () => console.log('Server up! 🎉'))
