module.exports = (req, res) => {
  const text = req.body.text ? req.body.text : 'alert'

  const result = {
    response_type: 'in_channel',
    text: `:siren:  *${text.toUpperCase()}*  :siren:`
  }

  res.send(result)
}
