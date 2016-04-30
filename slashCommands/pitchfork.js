module.exports = (req, res) => {
  const text = 'ANGRY AT OP? WANT TO JOIN THE MOB? _WE HAVE GOT YOU COVERED!_ \n' +
    'Traditional: ---E \n' +
    'Left Handed: Ǝ--- \n' +
    'Fancy: ---{ \n'

  const result = {
    response_type: 'in_channel',
    text: text
  }

  res.send(result)
}
