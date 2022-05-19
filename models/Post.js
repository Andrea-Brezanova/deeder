const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref:"User"
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  subcategory: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref:"Subcategory"
  },
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
