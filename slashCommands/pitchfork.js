module.exports = function (req, res) {
  var text = 'ANGRY AT OP? WANT TO JOIN THE MOB? _WE HAVE GOT YOU COVERED!_ \n'
  text += 'Traditional: ---E \n'
  text += 'Left Handed: Ǝ--- \n'
  text += 'Fancy: ---{ \n'

  var result = {
    response_type: 'in_channel',
    text: text
  }

  res.send(result)
}
