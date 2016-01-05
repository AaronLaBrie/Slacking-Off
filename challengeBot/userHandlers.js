var errorText = "Something broke :cry:";

var userHandlers = {
  addUser: function(bot, message) {
    bot.api.users.info({user: message.user}, function(err, data) {
      if(err) { return bot.reply(message, errorText); }
      bot.reply(message, JSON.stringify(data));
    });
  }
}

module.exports = userHandlers;
