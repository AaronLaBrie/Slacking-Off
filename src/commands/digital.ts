import { RequestHandler } from 'express'

// even out spacing, uppercase, and return in 'code' format
const digitizer = (digitalText: string) => {
  digitalText = digitalText
    .split(' ')
    .join('')
    .split('')
    .join(' ')
    .toLocaleUpperCase()
  return '`' + digitalText + '`'
}

export const digital: RequestHandler = ({ body }, { send }) => {
  const defaultText = '`D I G I T A L S P O R T S`'

  const result = {
    response_type: 'in_channel',
    text: body.text ? digitizer(body.text) : defaultText
  }

  send(result)
}
