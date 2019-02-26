const request = require('request-promise')

// A very good api: https://icanhazdadjoke.com/api
const dadConfig = {
  uri: 'https://icanhazdadjoke.com/',
  json: true
}

// gets a random dad joke
module.exports = (req, res) => {
  let result = {
    response_type: 'in_channel',
    text: ''
  }

  request(dadConfig)
    .then(joke => {
      result.text = joke.joke
      res.send(result)
    })
    .catch(err => {
      console.error(err)
      result.response_type = 'ephemeral'
      result.text = "Dad didn't answer :("
      res.send(result)
    })
}
