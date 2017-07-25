const express = require('express')

const alert = require('./alert')
const clap = require('./clap')
const dadjoke = require('./dadjoke')
const digital = require('./digital')
const donger = require('./donger')
const giff = require('./giff')
const hermes = require('./hermes')
const pitchfork = require('./pitchfork')
const riot = require('./riot')
const tableflip = require('./tableflip')

module.exports = () => {
  const app = express.Router()

  app.post('/alert', alert)
  app.post('/clap', clap)
  app.post('/dadjoke', dadjoke)
  app.post('/digital', digital)
  app.post('/donger', donger)
  app.post('/giff', giff)
  app.post('/hermes', hermes)
  app.post('/pitchfork', pitchfork)
  app.post('/riot', riot)
  app.post('/tableflip', tableflip)

  return app
}
