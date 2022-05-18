const answerModel = require("../models/Answer");

const getAnswers = (req, res, next) => {
      res.send("all answers");
};

const getAnswer = (req, res, next) => {
      res.send("one answer");
};

const createAnswer = (req, res, next) => {
      res.send("create answer");
};

const updateAnswer = (req, res, next) => {
      res.send("update answer");
};

const deleteAnswer = (req, res, next) => {
      res.send("delete answer");
};

module.exports = {
      getAnswers,
      getAnswer,
      createAnswer,
      updateAnswer,
      deleteAnswer,
};
