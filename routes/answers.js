const express = require("express");
const {
  getAnswers,
  getAnswer,
  createAnswer,
  updateAnswer,
  deleteAnswer,
} = require("../controllers/answers");

const answersRouter = express.Router();

answersRouter.route("/").get(getAnswers).post(createAnswer);

answersRouter
  .route("/answers")
  .get(getAnswer)
  .put(updateAnswer)
  .delete(deleteAnswer);

module.exports = answersRouter;
