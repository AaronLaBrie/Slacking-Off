var users = function(req, res) {
  var db = req.db;
  var collection = db.get('users');
  collection.find({},{},function(e,docs){
      res.json(docs);
  });
};

module.exports = users;
