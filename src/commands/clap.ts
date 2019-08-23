import { RequestHandler } from 'express'

const clapper = (text: string) =>
  text
    .trim()
    .toUpperCase()
    .split(' ')
    .join(' :clap: ') + ' :clap:'

// claps it out
export const clap: RequestHandler = ({ body }, { send }) => {
  const result = {
    response_type: 'in_channel',
    text: clapper(body.text)
  }

  send(result)
}
