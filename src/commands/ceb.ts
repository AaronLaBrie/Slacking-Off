import { RequestHandler } from 'express'

// CEEEEEEEEEEEEEEEB
export const ceb: RequestHandler = (_, res) => {
  const length = Math.floor(Math.random() * 100)
  const EEE = 'E'.repeat(length)
  const text = `C${EEE}B :dota_rage:`

  const result = {
    response_type: 'in_channel',
    text,
  }

  res.send(result)
}
