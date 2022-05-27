const { Schema, model, Types } = require("mongoose");

const postSchema = new Schema({
 
  author: {
    type: Types.ObjectId,
    required: true,
    ref: "User",
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
    type: Types.ObjectId,
    required: true,
    ref: "Subcategory",
  },
});

const postModel = model("Post", postSchema);
module.exports = postModel;
