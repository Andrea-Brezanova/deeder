const mongoose = require("mongoose");
const User = require("../models/User"); const { Schema, model } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: Number,
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

  location: {
    type: String,
  },
});

userSchema.pre("save", function (next) {

  next();
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
