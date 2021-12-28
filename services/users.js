const users = require('../models/users');

class UserService {
  static async create(data) {
    const result = await users.create(data);
    return result;
  }
}

module.exports = UserService;
