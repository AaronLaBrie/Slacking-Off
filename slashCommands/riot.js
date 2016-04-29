module.exports = function (req, res) {
  var text = req.body.text || 'riot'
  
  text = text.toUpperCase()

  var responseText = (text === 'PICNIC') ? ':picnic: NOW WE PICNIC :picnic:' : '୧༼ಠ益ಠ༽୨ NOW WE ' + text + ' ୧༼ಠ益ಠ༽୨'

  var result = {
    response_type: 'in_channel',
    text: responseText
  }

  res.send(result)
}
