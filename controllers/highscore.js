var express = require('express');
var Highscore = require('../models/highscore');
var router = express.Router();

router.get('/', function(req, res) {
  Highscore.find().sort({score: -1}).exec(function(err, highscores){
    if (err) return res.status(500).send(err);
    res.send(highscores);
  });
});

router.post('/', function(req, res) {
  Highscore.create(req.body, function(err, highscore) {
    if (err) return res.status(500).send(err);
    res.status(200).send('success');
  });
});


module.exports = router;