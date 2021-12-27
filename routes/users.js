var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({name:"Ashutosh Bhardwaj" , age :24, rolllNo : 5688792});
});

router.post('/', function(req, res, next) {
  res.send({...req.body , action:"add something"});
});

router.patch('/:id', function(req, res, next) {
  res.send({...req.body ,id :req.params.id, action:"update data"});
});

router.delete('/:id', function(req, res, next) {
  console.log("request-----" , req.params.id)
  res.send({action :"deleted data on heroku after updating api" , id:req.params.id });
});


module.exports = router;
