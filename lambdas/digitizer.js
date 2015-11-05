exports.digitizer = function(event, context) {
  if (event.token != "<INSERT YOUR TOKEN HERE>") {
    context.fail('Not from our team.');
    return;
  }

  //remove spaces to prevent double spacing, then digitize.
  var digitalText = event.text.split(" ").join("");
  digitalText = digitalText.split("").join(" ").toUpperCase();

  var result = {
    response_type: "in_channel",
    text: digitalText
  };

  context.succeed(result);
};
