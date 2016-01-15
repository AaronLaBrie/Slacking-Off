 var flipper = function(req, res) {

  if (req.body.token != process.env.DONGER_TOKEN) {
    res.status(401).send("Not from our team, sorry brah.");
    return;
  }

  var result = {
    response_type: "in_channel",
    text: "ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ",
  };

  res.send(result);
};

module.exports = flipper;
