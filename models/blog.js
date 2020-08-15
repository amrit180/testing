var mongoose=require('mongoose');
var blogSchema=new mongoose.Schema({
    blogtitle:String,
    blogimage:String,
    blogdescription:String
});
module.exports=mongoose.model('blog',blogSchema);