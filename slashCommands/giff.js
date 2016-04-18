module.exports = function (req, res) {
  if (req.body.token != process.env.GIFF_TOKEN) {
    return res.status(401).send('Not from our team, sorry brah.')
  }

  var text = req.body.text ? req.body.text : 'diretide'

  var result = {
    response_type: 'in_channel',
    text: '༼ つ ◕_◕ ༽つ giff ' + text
  }

  res.send(result)
}
