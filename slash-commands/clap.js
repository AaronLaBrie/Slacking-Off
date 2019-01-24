module.exports = (req, res) => {

  const clapper = (text) => {
    return text.trim().toUpperCase().split(' ').join(' :clap: ') + ' :clap:'
  }

  const result = {
    response_type: 'in_channel',
    text: clapper(req.body.text)
  }

  res.send(result)
}
