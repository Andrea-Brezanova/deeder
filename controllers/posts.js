const postModel = require("../models/Post");


//Display all posts
const getPosts = async (req, res, next) => {
  try {
    const posts = await postModel.find({});
    res.json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Display one post
const getPost = async (req, res, next) => {
  try {
    const {
      params: { id  },
    } = req;
    const post = await postModel.findById(id);
    res.json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Create a new post
const createPost = async (req, res, next) => {
  try {
    const {
      body: { userName, location, description, phone, subcategoryID  },
    } = req;
    const newPost = await postModel.create({ userName, location, description, phone, subcategoryID  });
    res.json(newPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Modify existing post
const updatePost = async (req, res, next) => {
  try {
    const {
      params: { id  },
    } = req;

    const {
      body: {
        userName,
        location,
        phone
      }
    } = req;
    const post = await postModel.findByIdAndUpdate(id, {userName, location, phone});
    res.json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Remove existing post
const deletePost = async (req, res, next) => {
  try {
    const {
      params: { id  },
    } = req;
    const post = await postModel.findByIdAndDelete(id);
    res.json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
