module.exports = (req, res) => {
  let text = req.body.text ? req.body.text.trim() : 'alert'

  if (text.charAt(0) !== ':'){
    text = `*${text.toUpperCase()}* `
  }

  const result = {
    response_type: 'in_channel',
    text: `:siren:  ${text}  :siren:`
  }

  res.send(result)
}
