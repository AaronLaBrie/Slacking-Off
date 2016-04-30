module.exports = (req, res) => {
  const digitalText = 'D I G I T A L S P O R T S'

  const digitizer = (digitalText) => {
    digitalText = digitalText.split(' ').join('')
    return digitalText.split('').join(' ').toUpperCase()
  }

  const result = {
    response_type: 'in_channel',
    text: req.body.text ? digitizer(req.body.text) : digitalText
  }

  res.send(result)
}
