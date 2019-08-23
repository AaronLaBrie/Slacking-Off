import { RequestHandler } from 'express'

// spam this flower
export const notail: RequestHandler = (_, res) => {
  const result = {
    response_type: 'in_channel',
    text: '🌻 SPAM 🌻 THIS 🌻 FLOWER 🌻 TO 🌻 GIVE 🌻 NOTAIL 🌻 POWER 🌻'
  }

  res.send(result)
}
