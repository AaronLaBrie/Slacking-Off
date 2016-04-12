module.exports = function (req, res) {
  if (req.body.token != process.env.RIOT_TOKEN) {
    res.status(401).send('Not from our team, sorry brah.')
    return
  }

  var text = req.body.text || 'riot'
  text = text.toUpperCase()

  var responseText = (text === 'PICNIC') ? ':picnic: NOW WE PICNIC :picnic:' : '୧༼ಠ益ಠ༽୨ NOW WE ' + text + ' ୧༼ಠ益ಠ༽୨'

  var result = {
    response_type: 'in_channel',
    text: responseText
  }

  res.send(result)
}
