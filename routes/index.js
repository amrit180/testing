var express=require('express');
var router=express.Router();
var passport=require("passport");
var User=require('../models/user');




// ================
// LANDING ROUTE
// ================
router.get("/",function(req,res){
    res.render("landing");
});



// ================
// AUTHENTICATION
// ================
router.get("/maalik/admin/register",function(req,res){
    res.render("register");
});


//REGISTER LOGIC

router.post("/maalik/admin/register",function(req,res){
    req.body.username
    req.body.password
    User.register(new User({username:req.body.username}),req.body.password,function(error,user){
        if(error){
            console.log(error);
            res.redirect("back");
        }else{
            passport.authenticate("local")(req,res,function(){
                req.flash("success","You Have Been Registered");
                res.redirect("/");
            });
        }
    });
});


// LOGIN GET REQUEST
router.get("/maalik/admin/login",function(req,res){
    res.render("login");
});

// LOGIN LOGIC

router.post("/maalik/admin/login",passport.authenticate("local",{
    successRedirect:"/",
    failureRedirect:"/maalik/admin/login"
}),function(req,res){

});

//LOGOUT LOGIC
router.get("/logout",function(req,res){
    req.logOut();
    req.flash("success","You Have Been Logged Out");
    res.redirect("/");
});
module.exports=router;