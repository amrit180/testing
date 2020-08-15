var mongoose=require('mongoose');
var webinarSchema=new mongoose.Schema({
    title:String,
    image:String,
    description:String
});
module.exports=mongoose.model('webinar',webinarSchema);