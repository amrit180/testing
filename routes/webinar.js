var express=require('express');
var router=express.Router();
var webinar=require('../models/webinars');
var middleware=require("../middleware");


//=====================================
//          WEBINAR ROUTES
//=====================================

router.get('/webinars',function(req,res){
    webinar.find({},function(error,webinar){
        if(error){
            console.log(error)
        }else{
            res.render("webinars",{webinar:webinar})
        }
    });
});

//=======================================
//         CREATE NEW WEBINAR
//=======================================

router.get('/webinars/new',middleware.isloggedin,function(req,res){
    res.render("newwebinar");
});
router.post("/webinars",middleware.isloggedin,function(req,res){
    //GET DATA FROM FORM AND ADD TO WEBINAR ARRAYS

    var title=req.body.title;
    var image=req.body.image;
    var description=req.body.description;

    var newWebinar={title:title, image:image, description:description}
  //CREATE A NEW CAMPGROUND AND SAVE TO DB
  webinar.create(newWebinar,function(error,newlycreatedWebinar){
      if(error){
          console.log(error);
          res.redirect("back")
      }else{
          res.redirect('/webinars')
      }
  });
});

//==========================================
//        SHOW WEBINAR IN DETAIL
//==========================================

router.get("/webinars/:id",function(req,res){
    webinar.findById(req.params.id,function(error,foundWebinar){
        if(error){
            console.log(error)
        }else{
            res.render("show",{webinar:foundWebinar})
        }
    })
})


// ==========================
//         EDIT ROUTES
// ==========================


router.get('/webinars/:id/edit',middleware.isloggedin,function(req,res){
    webinar.findById(req.params.id,function(error,foundWebinar){
        if(error){
            console.log(error)
        }else{
            res.render('editwebinar',{webinar:foundWebinar})
        }
    })
})

router.put('/webinars/:id',middleware.isloggedin,function(req,res){
    webinar.findByIdAndUpdate(req.params.id,req.body.webinar,function(error,updatedWebinar){
     if(error){
         console.log(error);
     }else{
         updatedWebinar.save();
         res.redirect('/webinars/'+req.params.id)
     }
    })
})


// =============================
//         DELETE ROUTE
// =============================


router.delete('/webinars/:id',middleware.isloggedin,function(req,res){
    webinar.findByIdAndRemove(req.params.id,function(error){
        if(error){
console.log(error);
res.redirect("back");
        }else{
            res.redirect("/webinars")
        }
    })
})


module.exports=router;