const { Schema, model} = require("mongoose");


const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  phone: {
    type: Number
  },
  location: {
    type: String,
  },
});

const userModel = model("User", userSchema);

module.exports = userModel;
