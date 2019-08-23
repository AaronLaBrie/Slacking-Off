import { RequestHandler } from 'express'

// CEEEEEEEEEEEEEEEB
export const ceb: RequestHandler = (_, { send }) => {
  const length = Math.floor(Math.random() * 100)
  const EEE = 'E'.repeat(length)
  const text = `C${EEE}B :dota-rage:`

  const result = {
    response_type: 'in_channel',
    text
  }

  send(result)
}
