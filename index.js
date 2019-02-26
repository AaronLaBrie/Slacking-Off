// Deps
const newrelic = require('newrelic')
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request-promise')

const slashCommands = require('./slash-commands')

const app = express()
app.set('port', process.env.PORT || 3000)

// Slack posts using urlencoded data
app.use(bodyParser.urlencoded({ extended: false }))

// Base route for the slash commands
app.use('/commands', slashCommands())

app.get('/', (req, res) => {
  res.send('<a href="https://github.com/AaronLaBrie/slashy">home</a>')
})

// Oauth stolen from https://api.slack.com/tutorials/app-creation-and-oauth
app.get('/oauth', (req, res) => {
  const options = {
    method: 'GET',
    // prettier-ignore
    uri: 'https://slack.com/api/oauth.access?code='
          +req.query.code+
          '&client_id='+process.env.CLIENT_ID+
          '&client_secret='+process.env.CLIENT_SECRET+
          '&redirect_uri='+process.env.REDIRECT_URI
  }
  request(options).then((_, response) => {
    console.log(response.body)
    var JSONresponse = JSON.parse(response.body)
    if (!JSONresponse.ok) {
      console.log(JSONresponse)
      res
        .send('Error encountered: \n' + JSON.stringify(JSONresponse))
        .status(200)
        .end()
    } else {
      console.log(JSONresponse)
      res.send('Success!')
    }
  })
})

// 404 if nothing else got hit.
app.use((req, res) => res.status(404).send('404: Not Found'))

const server = app.listen(app.get('port'), () => console.log('Server up! 🎉'))
