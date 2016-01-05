var monk = require('monk');
var db = monk(process.env.MONGOLAB_URI);
var errorText = "Something broke :cry:";

var challengeActions = {

  //Issue challenge!
  newChallenge: function(bot, message) {
    console.log(message)
    db.get('users').find({slackId: message.user}, function (err, doc){
      if(!doc || doc == []) {
        return bot.reply(message, JSON.stringify(doc));
      } else if (doc.tokens <= 0) {
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
          console.log(doc)
          if(targetId == doc.slackId) { return bot.reply(message, "You can't challenge yourself :poop:"); }

          var challenge = {
            to: targetId,
            from: doc.slackId,
            text: challengeText,
            created: new Date()
          }

          db.get('challenges').insert(challenge, function(err, doc) {
            if(err) { return bot.reply(message, errorText); }
            bot.reply(message, "<@" + target + ">, you have been challenged: " + challenge) + " :tada:";
          });
        }
      }
    });
  }
}

module.exports = challengeActions;
