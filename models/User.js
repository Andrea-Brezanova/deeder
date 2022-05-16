const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/User");

const userSchema = new Schema({
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

const userModel = model("User", userSchema);
module.exports = userModel;
