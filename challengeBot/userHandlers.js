var errorText = "Something broke :cry:";

var userHandlers = {
  addUser: function(bot, message) {
    bot.api.users.info({user: message.user}, function(err, response) {
      if(err) { return bot.reply(message, errorText); }
      console.log(response);
      bot.reply(message, "hold up");
    });
  }
}

module.exports = userHandlers;
