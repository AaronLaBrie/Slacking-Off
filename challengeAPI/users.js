module.exports = {
  newUser: function(req, res) {
    req.db.get('users').insert(req.body, function (err, doc) {
      if(err) { res.status(500).send(err) }
      res.send(doc)
    });
  },

  getUsers: function(req, res) {
    req.db.get('users').find({}, function (err, docs){
      if(err) { res.status(500).send(err) }
      res.send(docs);
    });
  },

  getUser: function(req, res) {
    req.db.get('users').findById(req.params.id, function (err, doc){
      if(err) { res.status(500).send(err) }
      res.send(doc);
    });
  },

  updateUser: function(req, res) {
    req.db.get('users').findAndModify(req.params.id, { $set: { name: car.name } }, function (err){
      if(err) { res.status(500).send(err) }
      res.send(doc);
    });
  },

  deleteUser: function(req, res) {
    req.db.get('users').remove({_id :req.params.id}, function (err){
      if(err) { res.status(500).send(err) }
      res.send('Removed.');
    });
  }
}
