var express = require('express');
var router = express.Router();
var blog = require('../models/blog');
var middleware = require("../middleware");


//=====================================
//          WEBINAR ROUTES
//=====================================

router.get('/blogs', function (req, res) {
    blog.find({}, function (error, blog) {
        if (error) {
            console.log(error)
        } else {
            res.render("blogs", { blog: blog })
        }
    });
});

//=======================================
//         CREATE NEW WEBINAR
//=======================================

router.get('/blogs/new', middleware.isloggedin, function (req, res) {
    res.render("newblog");
});
router.post("/blogs", middleware.isloggedin, function (req, res) {
    //GET DATA FROM FORM AND ADD TO WEBINAR ARRAYS

    var blogtitle = req.body.blogtitle;
    var blogimage = req.body.blogimage;
    var blogimage2 = req.body.blogimage2;

    var blogdescription = req.body.blogdescription;

    var newblog = { blogtitle: blogtitle, blogimage: blogimage, blogimage2: blogimage2, blogdescription: blogdescription }
    //CREATE A NEW CAMPGROUND AND SAVE TO DB
    blog.create(newblog, function (error, newlycreatedblog) {
        if (error) {
            console.log(error);
            res.redirect("back")
        } else {
            res.redirect('/blogs')
        }
    });
});

//==========================================
//        SHOW WEBINAR IN DETAIL
//==========================================

router.get("/blogs/:id", function (req, res) {
    blog.findById(req.params.id, function (error, foundblog) {
        if (error) {
            console.log(error)
        } else {
            res.render("showblog", { blog: foundblog })
        }
    })
})

// ==========================
//         EDIT ROUTES
// ==========================


router.get('/blogs/:id/edit', middleware.isloggedin, function (req, res) {
    blog.findById(req.params.id, function (error, foundblog) {
        if (error) {
            console.log(error)
        } else {
            res.render('editblog', { blog: foundblog })
        }
    })
})

router.put('/blogs/:id', middleware.isloggedin, function (req, res) {
    blog.findByIdAndUpdate(req.params.id, req.body.blog, function (error, updatedblog) {
        if (error) {
            console.log(error);
        } else {
            updatedblog.save();
            res.redirect('/blogs/' + req.params.id)
        }
    })
})


// =============================
//         DELETE ROUTE
// =============================


router.delete('/blogs/:id', middleware.isloggedin, function (req, res) {
    blog.findByIdAndRemove(req.params.id, function (error) {
        if (error) {
            console.log(error);
            res.redirect("back");
        } else {
            res.redirect("/blogs")
        }
    });
});


module.exports = router;