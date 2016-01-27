var mongoose = require('mongoose');

// create a schema
var highscoreSchema = new mongoose.Schema({
  _creator: {type: Number, ref: 'User'},
  initials: String,
  score: Number,
  created_at: Date,
  updated_at: Date
});

var Highscore = mongoose.model('Highscore', highscoreSchema);

// make this available to our other files
module.exports = Highscore;