var mongoose = require('mongoose'),
    db = require('../services/database'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Types.ObjectId;

// http://mongoosejs.com/docs/schematypes.html
// 
var BlogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        index: true,
        default: 'ffoo'
    },
    body: Schema.Types.Mixed
});


var Blog = mongoose.model('Blog', BlogSchema);

exports = module.exports = Blog;
