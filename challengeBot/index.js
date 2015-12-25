var Botkit = require('botkit');
var express = require('express');

module.exports = (function() {
  var app = express.Router();

  var controller = Botkit.slackbot({
    debug: false
  });

  controller.spawn({
    token: process.env.CHALLENGEBOT_TOKEN,
  }).startRTM();

  controller.hears('ping', 'direct_message,direct_mention,mention', function(bot, message) {
    bot.reply(message, 'PONG');
  });

  controller.hears('challenge', 'direct_mention,mention', function(bot, message) {
    var params = message.text.split(" ");
    console.log(params)
    if(params[1].slice(0,2) != '<@') {
      bot.reply(message, "I don't understand :disappointed:");
    } else {
      //shift off the word 'challenge', then get the target
      params.shift();
      var target = params.shift();

      //the rest should be the challenge.
      var challenge = params.join(" ");
      bot.reply(message, target + ", you have been challenged: " + challenge);
    }
  });

  return app;
})();
