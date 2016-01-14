var giffer = function(req, res) {

  if (req.body.token != process.env.GIFFER_TOKEN) {
    res.status(401).send("Not from our team, sorry brah.");
    return;
  }

  var giffText = "";
  var giff = "༼ つ ◕_◕ ༽つ giff ";

  if(req.body.text) {
    giffText = giff + req.body.text;
  } else {
    giffText = giff + "diretide";
  }

  var result = {
    response_type: "in_channel",
    text: giffText,
  };

  res.send(result);
};

module.exports = giffer;
