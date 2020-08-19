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

    var heading2 = req.body.heading2;
    var heading3 = req.body.heading3;
    var heading4 = req.body.heading4;
    var heading5 = req.body.heading5;
    var heading6 = req.body.heading6;
    var heading7 = req.body.heading7;
    var heading8 = req.body.heading8;
    var heading9 = req.body.heading9;

    var blogimage3 = req.body.blogimage3;
    var blogimage4 = req.body.blogimage4;
    var blogimage5 = req.body.blogimage5;
    var blogimage6 = req.body.blogimage6;
    var blogimage7 = req.body.blogimage7;
    var blogimage8 = req.body.blogimage8;
    var blogimage9 = req.body.blogimage9;
    var blogimage10 = req.body.blogimage10;
    var blogimage11 = req.body.blogimage11;
    var blogimage12 = req.body.blogimage12;
    var blogimage13 = req.body.blogimage13;
    var blogimage14 = req.body.blogimage14;

    var content2 = req.body.content2;
    var content3 = req.body.content3;
    var content4 = req.body.content4;
    var content5 = req.body.content5;
    var content6 = req.body.content6;
    var content7 = req.body.content7;
    var content8 = req.body.content8;
    var content9 = req.body.content9;
    var content10 = req.body.content10;
    var content11 = req.body.content11;
    var content12 = req.body.content12;
    var content13 = req.body.content13;

    var newblog = {
        blogtitle: blogtitle,
        blogimage: blogimage,
        blogdescription: blogdescription,
        blogimage2: blogimage2,

        heading2: heading2,
        heading3: heading3,
        heading4: heading4,
        heading5: heading5,
        heading6: heading6,
        heading7: heading7,
        heading8: heading8,
        heading9: heading9,

        blogimage3: blogimage3,
        blogimage4: blogimage4,
        blogimage5: blogimage5,
        blogimage6: blogimage6,
        blogimage7: blogimage7,
        blogimage8: blogimage8,
        blogimage9: blogimage9,
        blogimage10: blogimage10,
        blogimage11: blogimage11,
        blogimage12: blogimage12,
        blogimage13: blogimage13,
        blogimage14: blogimage14,


        content2: content2,
        content3: content3,
        content4: content4,
        content5: content5,
        content6: content6,
        content7: content7,
        content8: content8,
        content9: content9,
        content10: content10,
        content11: content11,
        content12: content12,
        content13: content13

    }


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


// router.get('/blogs/:id/edit', middleware.isloggedin, function (req, res) {
//     blog.findById(req.params.id, function (error, foundblog) {
//         if (error) {
//             console.log(error)
//         } else {
//             res.render('editblog', { blog: foundblog })
//         }
//     })
// })

// router.put('/blogs/:id', middleware.isloggedin, function (req, res) {
//     blog.findByIdAndUpdate(req.params.id, req.body.blog, function (error, updatedblog) {
//         if (error) {
//             console.log(error);
//         } else {
//             updatedblog.save();
//             res.redirect('/blogs/' + req.params.id)
//         }
//     })
// })







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
            console.log(updatedblog)
            updatedblog.save();
            console.log(updatedblog)
            res.redirect('/blogs/' + req.params.id)
            console.log(updatedblog)
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