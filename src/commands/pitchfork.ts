import { RequestHandler } from 'express'

const shitpost = `
  ANGRY AT OP? WANT TO JOIN THE MOB? _WE HAVE GOT YOU COVERED!_
  Traditional:  ---E
  Left Handed:  Ǝ---
  Fancy:        ---{
`

// Pitchform Emporioum
export const pitchfork: RequestHandler = (_, res) => {
  const result = {
    response_type: 'in_channel',
    text: shitpost
  }

  res.send(result)
}
