const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  avatar: {
    type: String,
  },
  address: {
    type: String,
  },
  roleId: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
});

module.exports = mongoose.model("users", dataSchema);
