// Deps
import express from 'express'
import bodyParser from 'body-parser'
import request from 'request-promise'

import { commands } from './commands'

const app = express()
app.set('port', process.env.PORT || 3000)

// Slack posts using urlencoded data
app.use(bodyParser.urlencoded({ extended: false }))

// index
app.get('/', (_, { send }) => {
  send('<a href="https://github.com/AaronLaBrie/slashy">home</a>')
})

// Oauth stolen from https://api.slack.com/tutorials/app-creation-and-oauth
const confirmURL = (code: string) =>
  `https://slack.com/api/oauth.access?code=${code}` +
  `&client_id=${process.env.CLIENT_ID}` +
  `&client_secret=${process.env.CLIENT_SECRET}` +
  `&redirect_uri=${process.env.REDIRECT_URI}`

app.get('/oauth', ({ query }, { send }) => {
  request({ method: 'GET', uri: confirmURL(query.code) })
    .then(() => send('Success!'))
    .catch(() => send('It broke!'))
})

// Base route for the slash commands
app.use('/commands', commands())

// 404 if nothing else got hit.
app.use((_, res) => res.status(404).send('404: Not Found'))

// ping every 5 minutes to stay awake
setInterval(() => request({ method: 'GET', uri: process.env.HEALTH_CHECK || '' }), 300000)

// les go!
app.listen(app.get('port'), () => console.log('Server up! 🎉'))
