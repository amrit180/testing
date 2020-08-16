var mongoose = require('mongoose');
var passportlocalmongoose = require("passport-local-mongoose");
var userSchema = new mongoose.Schema({
    username: { type: String, index: { unique: true } },
    password: String
});
userSchema.plugin(passportlocalmongoose);
module.exports = mongoose.model('User', userSchema);