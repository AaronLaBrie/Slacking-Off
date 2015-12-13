 var flipper = function(req, res) {

  if (req.body.token != process.env.FLIPPER_TOKEN) {
    res.status(401).send("Not from our team, sorry brah.");
    return;
  }

  var responseText = "";

  switch (req.body.text) {
    case "replace":
      responseText = "┬─┬ノ( º _ ºノ)";
      break;
    default:
      responseText = "(╯°□°)╯︵ ┻━┻";
  }

  var result = {
    response_type: "in_channel",
    text: responseText,
  };

  res.send(result);
};

module.exports = flipper;
