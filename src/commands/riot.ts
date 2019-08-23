import { RequestHandler } from 'express'

// burn this mother down
export const riot: RequestHandler = ({ body }, { send }) => {
  const riotText = body.text ? body.text.toUpperCase() : 'RIOT'

  const responseText = riotText === 'PICNIC' ? ':picnic: NOW WE PICNIC :picnic:' : `୧༼ಠ益ಠ༽୨ NOW WE ${riotText} ୧༼ಠ益ಠ༽୨`

  const result = {
    response_type: 'in_channel',
    text: responseText
  }

  send(result)
}
