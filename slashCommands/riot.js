module.exports = function(req, res) {

  if (req.body.token != process.env.RIOT_TOKEN) {
    res.status(401).send('Not from our team, sorry brah.')
    return
  }

  var responseText = (req.body.text === 'picnic') ? ':picnic: NOW WE PICNIC :picnic:' : '୧༼ಠ益ಠ༽୨ NOW WE RIOT ୧༼ಠ益ಠ༽୨'

  var result = {
    response_type: 'in_channel',
    text: responseText
  }

  res.send(result)
}
