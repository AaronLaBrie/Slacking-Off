exports.flipper = function(req, res) {

  if (req.body.team_domain != process.env.TEAM_DOMAIN) {
    res.status(401).send(req.body.team_domain + " " + process.env.TEAM_DOMAIN);
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
