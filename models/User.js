const mongoose = require("mongoose");
const User = require("../models/User"); const { Schema, model } = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },

  location: {
    type: String,
  },
});


const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
