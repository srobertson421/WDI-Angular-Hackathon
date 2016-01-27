var express = require('express');
var User = require('../models/user');
var router = express.Router();

router.post('/signup', function(req, res) {
  User.create(req.body, function(err, user) {
    if (err) return res.status(500).send(err);
    res.status(200).send(user);
  });
});

router.post('/login', function(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) return res.status(401).send(err);

    if (user.password === req.body.password) {
      res.status(200).send(user);
    } else {
      res.status(404).send('Invalid Password or User not found!');
    }
  });
});

router.put('/:id', function(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    
  });
});

module.exports = router;