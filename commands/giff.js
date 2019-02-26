// giff diretide
module.exports = (req, res) => {
  const text = req.body.text ? req.body.text : 'diretide'

  const result = {
    response_type: 'in_channel',
    text: `༼ つ ◕_◕ ༽つ giff ${text}`
  }

  res.send(result)
}
