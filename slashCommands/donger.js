 var flipper = function(req, res) {

  if (req.body.token != process.env.DONGER_TOKEN) {
    res.status(401).send("Not from our team, sorry brah.");
    return;
  }

  var text = req.body.text ? req.body.text : "raise your dongers";

  var result = {
    response_type: "in_channel",
    text: "ヽ༼ຈل͜ຈ༽ﾉ " + text + " ヽ༼ຈل͜ຈ༽ﾉ",
  };

  res.send(result);
};

module.exports = flipper;
