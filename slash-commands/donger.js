module.exports = (req, res) => {
  const text = req.body.text ? req.body.text : 'raise your dongers'

  const result = {
    response_type: 'in_channel',
    text: `ヽ༼ຈل͜ຈ༽ﾉ ${text} ヽ༼ຈل͜ຈ༽ﾉ`
  }

  res.send(result)
}
