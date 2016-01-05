var Botkit = require('botkit');
var express = require('express');
var monk = require('monk');

module.exports = (function() {
  var app = express.Router();
  var errorText = "Something broke :cry:";
  var db = monk(process.env.MONGOLAB_URI);

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
  controller.hears('add me', 'direct_mention,mention', function(bot, message) {
    //Make sure they aren't already in the game
    db.get('users').findById(req.params.id, function (err, doc) {
      if(err) { return bot.reply(message, errorText); }
      if(doc) { return bot.reply(message, "You're already playing :face_with_rolling_eyes:"); }
      //Add them.
      req.db.get('users').insert({}, function (err, doc) {
        if(err) {  return bot.reply(message, errorText); }
        bot.reply(mesage, "Added! :tada:");
      });
    });
  });

  //Issue Challenge
  controller.hears('challenge', 'direct_mention,mention', function(bot, message) {
    var params = message.text.split(" ");

    //Check for a target
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

  //User test
  controller.hears('users', 'direct_mention,mention', function(bot, message) {
    db.get('users').find({}, function (err, docs){
      if(err) { res.status(500).send(err) }
      bot.reply(message, docs[0].name );
    });
  });

  return app;
})();
