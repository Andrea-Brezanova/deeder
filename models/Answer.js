const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Answer = require("../model/Answer");

const answerSchema = new Schema({
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
  postID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
});

const answerModel = model("Answer", answerSchema);
module.exports = answerModel;
