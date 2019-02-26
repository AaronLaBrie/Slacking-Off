// even out spacing, uppercase, and return in 'code' format
const digitizer = digitalText => {
  digitalText = digitalText
    .split(' ')
    .join('')
    .split('')
    .join(' ')
    .toLocaleUpperCase()
  return '`' + digitalText + '`'
}

module.exports = (req, res) => {
  const defaultText = '`D I G I T A L S P O R T S`'

  const result = {
    response_type: 'in_channel',
    text: req.body.text ? digitizer(req.body.text) : defaultText
  }

  res.send(result)
}
