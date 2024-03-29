/**
* @author Parth Shah
* @studentID 301171805
* @date September 27, 2021
* @description Personal Portfolio website
*/
/* GET contact page. */
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

router.post("/", (req, res) => {

  console.log("Post method called");
  object = {
    firstname: req.body.firstName,
    email: req.body.email,
    lastname: req.body.lastName,
    message: req.body.message
  };

  console.log(object);

  res.render("index", { title: "Home" });
});

module.exports = router;
