var errorText = "Something broke :cry:";

var userHandlers = {
  addUser: function(bot, message) {
    bot.api.users.info({user: message.user}, function(err, response) {
      if(err) { return bot.reply(message, errorText); }
      bot.reply(message, response.user.name);
    });
  }
}

module.exports = userHandlers;
