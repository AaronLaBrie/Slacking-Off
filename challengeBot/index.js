var Botkit = require('botkit');
var express = require('express');

module.exports = (function() {
  var app = express.Router();

  var controller = Botkit.slackbot({
    debug: false
  });

  controller.spawn({
    token: process.env.CHALLENGEBOT_TOKEN,
  }).startRTM()

  controller.hears('hello','direct_message,direct_mention,mention',function(bot,message) {
    bot.reply(message,'Hello yourself.');
  });

  controller.hears('challenge','direct_mention,mention',function(bot,message) {
    bot.reply(message,'A challenge!: ' + message.text);
  });

  return app;
})();
