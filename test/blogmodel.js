var assert = require('chai').assert;
var BlogModel = require('../models/blog');

describe('#createBlog', function(done) {
    it('should create a new blog.', function() {
        var blog = new BlogModel();
        blog.title = "foo";
        blog.body = {
            category: 'nodejs',
            article: 'sssssss'
        }
        blog.save(function(err, doc) {
            if (err) return done(err);
            console.log(doc);
            done();

        });
    });

    // http://mongoosejs.com/docs/queries.html
    it('should query a blog.', function(done) {
        BlogModel.find({ title: "foo" }, 'title').exec().then(function(docs) {
            console.log("query: " + JSON.stringify(docs));
            done();
        }, function(err) {
            done(err);
        })
    });

    // update a blog
    // http://blog.csdn.net/samurais/article/details/18399701
    it('should update a blog', function(done) {
        BlogModel.findOne({
                _id: '57524c6cbfc68a0855061897'
            })
            .exec()
            .then(function(doc) {
                console.log("update", doc);
                doc.title = 'bar';
                doc.body.category = 'php';
                doc.markModified('body');
                doc.save(function(err, doc2) {
                    done();
                });
            })
    });
});
