var users = function(req, res) {
  var db = req.db;
  req.db.collection('users').find().toArray(function(err, result) {
    if (err) throw err;
    res.send(result);
  });
};

module.exports = users;
