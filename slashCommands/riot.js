module.exports = function(req, res) {

  if (req.body.token != process.env.RIOT_TOKEN) {
    res.status(401).send('Not from our team, sorry brah.')
    return
  }

  var text = (req.body.text === 'picnic') ? 'picnic' : 'riot'

  var result = {
    response_type: 'in_channel',
    text: '୧༼ಠ益ಠ༽୨ NOW WE' + text.toUpperCase() + ' ୧༼ಠ益ಠ༽୨'
  }

  res.send(result)
}
