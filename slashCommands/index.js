const express = require('express')

const digital = require('./digital')
const donger = require('./donger')
const tableflip = require('./tableflip')
const giff = require('./giff')
const pitchfork = require('./pitchfork')
const riot = require('./riot')
const hermes = require('./hermes')

module.exports = (() => {
  const app = express.Router()

  app.post('/digital', digital)
  app.post('/donger', donger)
  app.post('/tableflip', tableflip)
  app.post('/giff', giff)
  app.post('/pitchfork', pitchfork)
  app.post('/riot', riot)
  app.post('/hermes', hermes)

  return app
})
