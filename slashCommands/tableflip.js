module.exports = (req, res) => {
  const flips = [
    '(╯°□°）╯︵ ┻━┻',
    '(ﾉಥ益ಥ）ﾉ﻿ ┻━┻',
    '┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻',
    '(ノಠ益ಠ)ノ彡┻━┻',
    '(┛ಸ_ಸ)┛彡┻━┻',
    '┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻',
    '(┛◉Д◉)┛彡┻━┻'
  ]

  const index = Math.floor(Math.random() * flips.length)

  const responseText = (req.body.text == 'fix') ? '┬─┬ノ( º _ ºノ)' : flips[index]

  const result = {
    response_type: 'in_channel',
    text: responseText
  }

  res.send(result)
}
