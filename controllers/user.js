const userService = require('../services/users');

class UserController {
  static async create(req, res) {
    try {
      const result = await userService.create(req.body);
      return res.send(result);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserController;
