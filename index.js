var express = require('express');
var bodyParser = require('body-parser');
// A package to help manipulate paths
// More info: https://docs.nodejitsu.com/articles/file-system/how-to-use-the-path-module
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use('/api/highscore', require('./controllers/highscore'));
app.use('/user', require('./controllers/user'));

// Mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hackathon');

app.get('/', function(req, res) {
  res.send('Hi!');
});

app.listen(3000);