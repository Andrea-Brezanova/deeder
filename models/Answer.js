const { Schema, model, Types }= require("mongoose");


const answerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Types.ObjectId,
    required: true,
    ref: "User"
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

const answerModel = model("Answer", answerSchema);
module.exports = answerModel;
