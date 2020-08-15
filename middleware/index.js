  
  var middlewareobj={};
  
  
  //ISLOGGEDIN LOGIC
  middlewareobj.isloggedin=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else{
        req.flash("error","You are not logged in. Login first.");
        res.redirect("/login");
    }
    }
    module.exports=middlewareobj;