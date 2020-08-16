var mongoose = require('mongoose');
var blogSchema = new mongoose.Schema({
    blogtitle: String,
    blogimage: String,
    blogimage2: String,
    blogdescription: String
});
module.exports = mongoose.model('blog', blogSchema);