const fix = '┬─┬ノ( º _ ºノ)'

const flips = [
  '(╯°□°）╯︵ ┻━┻',
  '(ﾉಥ益ಥ）ﾉ﻿ ┻━┻',
  '┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻',
  '(ノಠ益ಠ)ノ彡┻━┻',
  '(┛ಸ_ಸ)┛彡┻━┻',
  '┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻',
  '(┛◉Д◉)┛彡┻━┻',
  '┬─┬ ︵ /(.□. \\）'
]

// table flipper (and fixer)
module.exports = (req, res) => {
  const index = Math.floor(Math.random() * flips.length)

  const responseText = req.body.text == 'fix' ? fix : flips[index]

  const result = {
    response_type: 'in_channel',
    text: responseText
  }

  res.send(result)
}
