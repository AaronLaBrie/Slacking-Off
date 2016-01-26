var digitizer = function(req, res) {

  if (req.body.token != process.env.DIGITIZER_TOKEN) {
    res.status(401).send("Not from our team, sorry brah.");
    return;
  }

  var digitialText = req.body.text ? req.body.text : "digital sports";

  //remove spaces to prevent double spacing, then digitize.
  digitalText = digitialText.split(" ").join("");
  digitalText = digitalText.split("").join(" ").toUpperCase();

  var result = {
    response_type: "in_channel",
    text: digitalText,
  };

  res.send(result);
};

module.exports = digitizer;
