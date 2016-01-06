var monk = require('monk');
var db = monk(process.env.MONGOLAB_URI);
var errorText = "Something broke :cry:";

var challengeActions = {

  //Issue challenge - the biggun
  new: function(bot, message) {
    db.get('users').findOne({slackId: message.user}, function (err, fromUser){
      if(err) { return bot.reply(message, errorText); }
      if(!fromUser) {
        return bot.reply(message, "You're not playing yet, dawg :dog:");
      } else if (fromUser.tokens <= 0) {
        return bot.reply(message, "You don't have any tokens, get someone to challenge you.");
      } else {
        var params = message.text.split(" ");

        //Check for a target
        if(params[1].slice(0,2) != '<@') {
          bot.reply(message, "I don't understand :disappointed:");
        } else {
          //Shift off the word 'challenge', then get the target slackID without the <@ > wrapper
          //Remaining params will be the challenge text
          params.shift();
          var targetId = params.shift().slice(2, -1);
          var challengeText = params.join(" ");
          if(targetId == fromUser.slackId) { return bot.reply(message, "You can't challenge yourself :poop:"); }

          //Now we make sure that the target doesn't already have a challenge from the sender.
          db.get('challenges').find({to: targetId, from: message.user, completed: false}, function(err, challenge) {
            if(err) { return bot.reply(message, errorText); }
            if(Array.isArray(challenge) && challenge.length > 0) {
              return bot.reply(message, "You already have a challenge to <@" + targetId + ">: " + challenge.text);
            }

            var challenge = {
              to: targetId,
              from: fromUser.slackId,
              text: challengeText,
              created: new Date(),
              completed: false
            }

            //Okay! Add the challenge
            db.get('challenges').insert(challenge, function(err) {
              if(err) { return bot.reply(message, errorText); }
              bot.reply(message, "<@" + targetId + ">, you have been challenged: " + challengeText) + " :tada:";
            });
          });
        }
      }
    });
  },

  //Get active challenges
  listActive: function(bot, message) {
    db.get('challenges').find({to: message.user, completed: false}, {sort: {created: 1}}, function (err, docs){
      if(err) { return bot.reply(message, errorText); }
      if(!docs || docs.length == 0) {
        return bot.reply(message, "You have no active challenges :crying_cat_face:");
      }

      var first = docs.shift();
      var challenges = first.text + " from <@" + first.from + ">.";
      docs.forEach(function(challenge, index) {
        challenges += "\n" + challenge.text + " from <@" + challenge.from + ">.";
      });

      bot.reply(message, challenges);
    });
  }

}

module.exports = challengeActions;
