var digitizer = function(req, res) {

  if (req.body.team_domain != process.env.DIGITIZER_TOKEN) {
    res.status(401).send("Not from our team, sorry brah.");
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

module.exports = digitizer;
