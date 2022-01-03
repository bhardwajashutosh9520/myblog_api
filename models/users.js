const mongoose = require('mongoose');
// const validator = require('validator');

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    auth0Id: { type: String, required: true },
    mobile: { type: Number },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    avatarUrl: { type: String },
    address: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
  },
  { timestamps: true },
);

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;
