const mongoose = require('mongoose');
// const validator = require('validator');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    profilePicture: { type: String },
  },
  { timestamps: true },
);

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;
