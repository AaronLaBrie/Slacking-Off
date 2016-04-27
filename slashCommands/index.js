var express = require('express')

var digital = require('./digital')
var donger = require('./donger')
var tableflip = require('./tableflip')
var giff = require('./giff')
var pitchfork = require('./pitchfork')
var riot = require('./riot')
var hermes = require('./hermes')

module.exports = (function () {
  var app = express.Router()

  app.post('/digital', digital)
  app.post('/donger', donger)
  app.post('/tableflip', tableflip)
  app.post('/giff', giff)
  app.post('/pitchfork', pitchfork)
  app.post('/riot', riot)
  app.post('/hermes', hermes)

  return app
})()
