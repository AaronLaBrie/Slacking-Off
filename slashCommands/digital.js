module.exports = function(req, res) {

  if (req.body.token != process.env.DIGITAL_TOKEN) {
    res.status(401).send('Not from our team, sorry brah.')
    return
  }

  var digitialText = req.body.text ? digitizer(req.body.text) : 'D I G I T A L S P O R T S'

  //remove spaces to prevent double spacing, then digitize.
  function digitizer(digitalText) {
    digitalText = digitialText.split(' ').join('')
    return digitalText.split('').join(' ').toUpperCase()
  }

  var result = {
    response_type: 'in_channel',
    text: digitalText
  }

  res.send(result)
}
