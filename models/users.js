const mongoose = require('mongoose');
// const validator = require('validator');

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    auth0Id: { type: String, required: true },
    mobile: { type: Number },
    name: {
      firstName: { type: String },
      lastName: { type: String },
    },
    avatarUrl: { type: String },
    address: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
    completedStage: { type: String, enum: ['profile', 'avatar', 'address'] },
  },
  { timestamps: true },
);

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;
