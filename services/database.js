var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongodbdemo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongoose connected.')
});


exports = module.exports = db;
