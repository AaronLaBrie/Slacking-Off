module.exports = {
  getUsers: function(req, res) {
    var db = req.db;
    var users = db.get('users');

    users.find({}, function (err, docs){
      res.send(docs);
    });
  }
}
