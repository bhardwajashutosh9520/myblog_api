var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send({ title: 'Express Any twice gain and again', name:"Ashutosh Bhardwaj" , medal :['A' , "B" , "C" , "D"]});
});


router.post('/', function(req, res) {
  console.log("request--------" , req.body)
  res.send(req.body);
})

module.exports = router;
