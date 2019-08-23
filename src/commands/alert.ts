import { RequestHandler } from 'express'

// sounds the alarm
export const alert: RequestHandler = ({ body }, { send }) => {
  let text = body.text ? body.text.trim() : 'alert'

  if (text.charAt(0) !== ':') {
    text = `*${text.toUpperCase().trim()}* `
  }

  const result = {
    response_type: 'in_channel',
    text: `:alert:  ${text} :alert:`
  }

  send(result)
}
