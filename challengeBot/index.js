var Botkit = require('botkit');
var express = require('express');
var userActions = require('./userActions');
var challengeActions = require('./challengeActions');

module.exports = (function() {
  var app = express.Router();
  var errorText = "Something broke :cry:";

  var controller = Botkit.slackbot({
    debug: false
  });

  controller.spawn({
    token: process.env.CHALLENGEBOT_TOKEN,
  }).startRTM();

  //Ping
  controller.hears('ping', 'direct_message,direct_mention,mention', function(bot, message) {
    bot.reply(message, 'PONG');
  });

  //Add User
  controller.hears('add me', 'direct_mention,mention', userActions.newUser);

  //Get users
  controller.hears('list players', 'direct_mention,mention', userActions.listUsers);

  //Issue Challenge
  controller.hears('challenge', 'direct_mention,mention', challengeActions.newChallenge);

  return app;
})();
