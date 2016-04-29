module.exports = function (req, res) {
  var flips = [
    '(╯°□°）╯︵ ┻━┻',
    '(ﾉಥ益ಥ）ﾉ﻿ ┻━┻',
    '┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻',
    '(ノಠ益ಠ)ノ彡┻━┻',
    '(┛ಸ_ಸ)┛彡┻━┻',
    '┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻',
    '(┛◉Д◉)┛彡┻━┻'
  ]

  var index = Math.floor(Math.random() * flips.length)

  var responseText = (req.body.text == 'fix') ? '┬─┬ノ( º _ ºノ)' : flips[index]

  var result = {
    response_type: 'in_channel',
    text: responseText
  }

  res.send(result)
}
