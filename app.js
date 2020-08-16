
var express = require('express');
var app = express();
var mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./models/connection');

connectDB();

var methodoverride = require('method-override');
var bodyparser = require('body-parser');
var flash = require('connect-flash');
var webinarRoutes = require('./routes/webinar');
var blogRoutes = require('./routes/blog');
var indexRoutes = require("./routes/index");
var contactUsRoutes = require('./routes/contact')
var passport = require('passport');
var localstartegy = require("passport-local");

var User = require("./models/user");
var env = require("dotenv");
var contactUs = require("./routes/contact")

var PORT = process.env.PORT || 3000;


//CSS FILE AND IMAGES K LIYE
app.use(express.static("public"));


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.set("view engine", "ejs");
app.use(methodoverride("_method"));
//FLASH
app.use(flash());
mongoose.set('useFindAndModify', false);
//EXPRESS SESSION
app.use(require("express-session")({
    secret: "Hello Bili",
    resave: false,
    saveUninitialized: false
}))

//=============================================
//                 PASSPORT
//=============================================

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localstartegy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
    res.locals.currentuser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});





//ROUTE HANDELING
app.use(webinarRoutes);
app.use(blogRoutes);
app.use(indexRoutes);
app.use(contactUsRoutes);



app.listen(PORT, function () {
    console.log('server started at http://Localhost:3000')
});