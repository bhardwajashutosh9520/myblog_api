const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// used to create a user
router.post('/', userController.create);

// used to get user data.
router.get('/getUserData', userController.getUserData);

// used to update user data on the basis of user id in params
router.patch('/:id', userController.updateUser);

// used to delete the user by passing id
router.delete('/:id', function (req, res, next) {
  res.send({
    action: 'deleted data on heroku after updating api',
    id: req.params.id,
  });
});

module.exports = router;
