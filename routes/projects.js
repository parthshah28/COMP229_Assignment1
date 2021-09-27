/**
* @author Parth Shah
* @studentID 301171805
* @date September 27, 2021
* @description Personal Portfolio website
*/
/* GET projects page. */
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

module.exports = router;
