var Botkit = require('botkit');
var express = require('express');
var userActions = require('./userActions');
var challengeActions = require('./challengeActions');

module.exports = (function() {
  var app = express.Router();

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

  //Help me Challengebot!
  controller.hears('help', 'direct_message,direct_mention,mention', function(bot, message) {
    var help_text = "`add me` to add yourself to the game.\n";
    help_text += "`list players` to see who all is playing.\n";
    help_text += "`challenge @person do this thing` to challenge that person to do that thing.\n";
    help_text += "`active challenges` to list all the challenges you have to do.";
    bot.reply(message, help_text);
  });

  //Add User
  controller.hears('add me', 'direct_mention', userActions.new);

  //Get users
  controller.hears('list players', 'direct_mention', userActions.list);

  //Current challenges
  controller.hears('active challenges', 'direct_mention', challengeActions.listActive);

  //Issue Challenge
  controller.hears('challenge', 'direct_mention', challengeActions.new);

  return app;
})();
