const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Types = mongoose.Types;
const model = mongoose.model;
const Answer = require("../models/Answer");

const answerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Types.ObjectId,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  post: {
    type: Types.ObjectId,
    required: true,
    ref:"Post"
  },
});

const answerModel = mongoose.model("Answer", answerSchema);
module.exports = answerModel;
