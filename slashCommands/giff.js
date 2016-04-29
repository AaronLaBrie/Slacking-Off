module.exports = function (req, res) {
  var text = req.body.text ? req.body.text : 'diretide'

  var result = {
    response_type: 'in_channel',
    text: '༼ つ ◕_◕ ༽つ giff ' + text
  }

  res.send(result)
}
