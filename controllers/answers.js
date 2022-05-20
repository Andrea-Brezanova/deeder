const answerModel = require("../models/Answer");

//Display all answers
const getAnswers = async (req, res, next) => {
  try {
    const {
      query: { post },
    } = req;
    const searchQuery = post ? { post } : {};

    const answers = await answerModel.find(searchQuery).populate("author");
    res.json(answers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Display one answer
const getAnswer = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const answer = await answerModel.findById(id).populate("author post");
    res.json(answer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Create a new answer
const createAnswer = async (req, res, next) => {
  try {
    const {
      body: { title, author, body, post },
    } = req;
    const newAnswer = await answerModel.create({ title, author, body, post });
    res.json(newAnswer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Modify existing answer
const updateAnswer = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const {
      body: { title, author, body, post },
    } = req;
    const answer = await answerModel.findByIdAndUpdate(id, {
      title,
      author,
      body,
      post,
    });
    res.json(answer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Remove existing answer
const deleteAnswer = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const answer = await answerModel.findByIdAndDelete(id);
    res.json(answer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAnswers,
  getAnswer,
  createAnswer,
  updateAnswer,
  deleteAnswer,
};
