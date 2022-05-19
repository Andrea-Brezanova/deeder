const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require("../models/Post");

const postSchema = new mongoose.Schema({
  userName: {
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
  },
  date: {
    type: Date,
    default: Date.now,
  },
  subcategoryID: {
    type: String,
  },
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
