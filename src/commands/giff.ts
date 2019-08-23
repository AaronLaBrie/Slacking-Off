import { RequestHandler } from 'express'

// giff diretide
export const giff: RequestHandler = ({ body }, { send }) => {
  const text = body.text ? body.text : 'diretide'

  const result = {
    response_type: 'in_channel',
    text: `༼ つ ◕_◕ ༽つ giff ${text}`
  }

  send(result)
}
