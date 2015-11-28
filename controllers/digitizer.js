exports.digitizer = function(req, res) {

  if (req.body.team_domain != process.env.TEAM_DOMAIN) {
    res.status(401).send('Not from our team.');
    return;
  }
  
  var digitialText = "";
  //remove spaces to prevent double spacing, then digitize.

  if(req.body.text) {
    digitalText = req.body.text.split(" ").join("");
    digitalText = digitalText.split("").join(" ").toUpperCase();
  }

  var result = {
    response_type: "in_channel",
    text: digitalText,
  };

  res.send(result);
};
