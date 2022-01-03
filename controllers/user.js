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

  static async getUserData(req, res) {
    try {
      const data = req.body;
      const result = await userService.find(data);
      return res.send(result);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(req, res) {
    try {
      const data = req.body;
      const id = req.params.id;
      const result = await userService.update({ _id: id }, data);
      return res.send(result);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserController;
