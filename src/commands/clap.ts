import { RequestHandler } from 'express'

const clapper = (text: string) => text.trim().toUpperCase().split(' ').join(' :clap: ') + ' :clap:'

// claps it out
export const clap: RequestHandler = (req, res) => {
  const result = {
    response_type: 'in_channel',
    text: clapper(req.body.text),
  }

  res.send(result)
}
