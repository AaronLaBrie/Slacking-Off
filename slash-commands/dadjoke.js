const request = require('request-promise')

// Best api ever: https://icanhazdadjoke.com/api

module.exports = (req, res) => {
  const config = {
    uri: 'https://icanhazdadjoke.com/',
    json: true
  }

  let result = {
    response_type: 'in_channel',
    text: ''
  }

  request(config)
    .then(joke => {
      result.text = joke.joke
      res.send(result)
    })
    .catch(err => {
      console.error(err)
      result.response_type = 'ephemeral'
      result.text = 'Something broke :('
      res.send(result)
    })
}
