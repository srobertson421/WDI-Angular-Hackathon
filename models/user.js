var mongoose = require('mongoose');
var Highscore = require('./highscore');

var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  highScores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Highscore' }]
});

var User = mongoose.model('User', userSchema);

// make this available to our other files
module.exports = User;