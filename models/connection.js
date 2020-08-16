const mongoose = require('mongoose');

const URI = "mongodb+srv://amritanshu:amritanshu@cluster0-wu5uz.gcp.mongodb.net/Webinar?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected..!');
};

module.exports = connectDB;
