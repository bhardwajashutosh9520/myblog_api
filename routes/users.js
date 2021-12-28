var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

// used to create a user
router.post('/', userController.create);

// used to get userList
router.get('/', function (req, res, next) {
  res.send({ name: 'Ashutosh Bhardwaj', age: 24, rolllNo: 5688792 });
});

// used to get user data by passing user id in params.
router.get('/:id', function (req, res, next) {
  res.send({ name: 'Ashutosh Bhardwaj', age: 24, rolllNo: 5688792 });
});

// used to update user data on the basis of user id in params
router.patch('/:id', function (req, res, next) {
  res.send({ ...req.body, id: req.params.id, action: 'update data' });
});

// used to delete the user by passing id
router.delete('/:id', function (req, res, next) {
  res.send({
    action: 'deleted data on heroku after updating api',
    id: req.params.id,
  });
});

module.exports = router;
