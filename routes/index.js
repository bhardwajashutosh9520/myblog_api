var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send({ title: 'It is a place of ab-blog-api', name:"Ashutosh Bhardwaj", status: "running successfull on your machine."});
});

module.exports = router;
