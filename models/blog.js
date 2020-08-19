var mongoose = require('mongoose');
var blogSchema = new mongoose.Schema({
    blogtitle: String,
    blogimage: String,
    blogimage2: String,
    blogdescription: String,


    heading2: String,
    heading3: String,
    heading4: String,
    heading5: String,
    heading6: String,
    heading7: String,
    heading8: String,
    heading9: String,


    blogimage3: String,
    blogimage4: String,
    blogimage5: String,
    blogimage6: String,
    blogimage7: String,
    blogimage8: String,
    blogimage9: String,
    blogimage10: String,
    blogimage11: String,
    blogimage12: String,
    blogimage13: String,
    blogimage14: String,
    blogimage15: String,

    content2: String,
    content3: String,
    content4: String,
    content5: String,
    content6: String,
    content7: String,
    content8: String,
    content9: String,
    content10: String,
    content11: String,
    content12: String,
    content13: String


});
module.exports = mongoose.model('blog', blogSchema);