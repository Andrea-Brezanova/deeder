const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require("../models/Post");

const postSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  subcategoryID: {
    type: String,
    required: true,
  },
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
