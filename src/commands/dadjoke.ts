import request from 'request-promise'
import { RequestHandler } from 'express'

// A very good api: https://icanhazdadjoke.com/api
const dadConfig = {
  uri: 'https://icanhazdadjoke.com/',
  json: true
}

// gets a random dad joke
export const dadJoke: RequestHandler = (_, res) => {
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
