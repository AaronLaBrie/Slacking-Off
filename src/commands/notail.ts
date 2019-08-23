import { RequestHandler } from 'express'

// spam this flower
export const notail: RequestHandler = (_, { send }) => {
  const result = {
    response_type: 'in_channel',
    text: '🌻 SPAM 🌻 THIS 🌻 FLOWER 🌻 TO 🌻 GIVE 🌻 NOTAIL 🌻 POWER 🌻'
  }

  send(result)
}
