const { findOneAndUpdate } = require('../models/users');
const users = require('../models/users');

class UserService {
  static async create(data) {
    const result = await users.create(data);
    return result;
  }

  static async find(where) {
    const result = await users.find(where);
    return result;
  }

  static async update(where, data) {
    const result = await users.findOneAndUpdate(where, data, { new: true });
    return result;
  }
}

module.exports = UserService;
