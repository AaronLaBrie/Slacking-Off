import { RequestHandler } from 'express'

// sounds the alarm
export const alert: RequestHandler = (req, res) => {
  let text = req.body.text ? req.body.text.trim() : 'alert'

  if (text.charAt(0) !== ':') {
    text = `*${text.toUpperCase().trim()}* `
  }

  const result = {
    response_type: 'in_channel',
    text: `:alert:  ${text} :alert:`,
  }

  res.send(result)
}
