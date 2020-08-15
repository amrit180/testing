const express=require("express");
const router=express.Router();
const env=require("dotenv");
const nodemailer=require("nodemailer");
const bodyparser=require('body-parser');
const urlencoded=bodyparser.urlencoded({extended:true})

router.get("/contactus",(req,res)=>{
    res.render("contactus");
});


router.post("/contactus",urlencoded,(req,res)=>{
    "use strict";


// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_EMAIL, // generated ethereal user
      pass: process.env.GMAIL_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: req.body.user_mail, // sender address
    to: "kislayvats@yahoo.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: req.body.user_message, // plain text body
   
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

})

module.exports=router;