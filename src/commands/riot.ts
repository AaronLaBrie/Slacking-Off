import { RequestHandler } from 'express'

// burn this mother down
export const riot: RequestHandler = (req, res) => {
  const riotText = req.body.text ? req.body.text.toUpperCase() : 'RIOT'

  const responseText = riotText === 'PICNIC' ? ':picnic: NOW WE PICNIC :picnic:' : `୧༼ಠ益ಠ༽୨ NOW WE ${riotText} ୧༼ಠ益ಠ༽୨`

  const result = {
    response_type: 'in_channel',
    text: responseText
  }

  res.send(result)
}
