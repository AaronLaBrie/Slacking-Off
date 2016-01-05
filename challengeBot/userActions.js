var monk = require('monk');
var db = monk(process.env.MONGOLAB_URI);
var errorText = "Something broke :cry:";

var userActions = {

  //Add a new user to the game! Make sure they're not already playing first.
  addUser: function(bot, message) {
    bot.api.users.info({user: message.user}, function(err, data) {
      if(err) { return bot.reply(message, errorText); }
      db.get('users').find({slackId: message.user}, function (err, docs){
        if(docs.length > 0) {
          return bot.reply(message, "You're already playing :face_with_rolling_eyes:");
        } else {
          //rename id so mongo isn't dumb
          data.user["slackId"] = data.user["id"];
          delete data.user["id"];
          data.user.tokens = 2;
          db.get('users').insert(data.user, function (err, doc) {
            if(err) { return bot.reply(message, errorText); }
            return bot.reply(message, "Alright dude, you're in the game!");
          });
        }
      });
    });
  },

  //List all users
  listUsers: function(bot, message) {
    db.get('users').find({}, function (err, docs){
      if(docs.length == 0) {
        return bot.reply(message, "Nobody is playing :crying_cat_face:");
      } else if (docs.length == 1) {
        return bot.reply(message, "Only " + docs[0].name + "is playing.");
      } else {
        var players = docs.shift().name;
        docs.forEach(function(user, index) {
          players += ", " + user.name;
        });
        return bot.reply(message, "These homies are all players: " + players + ".");
      }
    });
  }

}

module.exports = userActions;
