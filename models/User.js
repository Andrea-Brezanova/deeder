const mongoose = require("mongoose");
const User = require("../models/User");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Phone_Number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  Location: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
