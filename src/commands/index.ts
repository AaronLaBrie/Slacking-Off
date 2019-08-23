import express from 'express'

import { alert } from './alert'
import { clap } from './clap'
import { dadJoke } from './dadjoke'
import { digital } from './digital'
import { giff } from './giff'
import { hermes } from './hermes'
import { pitchfork } from './pitchfork'
import { riot } from './riot'
import { tableFlip } from './tableflip'

export const commands = () => {
  const app = express.Router()

  app.post('/alert', alert)
  app.post('/clap', clap)
  app.post('/dadjoke', dadJoke)
  app.post('/digital', digital)
  app.post('/giff', giff)
  app.post('/hermes', hermes)
  app.post('/pitchfork', pitchfork)
  app.post('/riot', riot)
  app.post('/tableflip', tableFlip)

  return app
}
