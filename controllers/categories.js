const categoryModel = require("../models/Category");

//Display all Categories
const getCategory = async (req, res, next) => {
  try {
    const categories = await postModel.find({});
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Display one category
const getCategories = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const category = await postModel.findById(id);
    res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Create a new CATEGORY
const createCategory = async (req, res, next) => {
  try {
    const {
      body: { userName, location, description, phone, subcategoryID },
    } = req;
    const newCategory = await postModel.create({ userName, location, description, phone, subcategoryID });
    res.json(newCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Modify existing CATEGORY
const updateCategory = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const {
      body: {
        userName,
        location,
        phone
      }
    } = req;
    const category = await categoryModel.findByIdAndUpdate(id, { userName, location, phone });
    res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Remove existing Category
const deleteCategory = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const post = await categoryModel.findByIdAndDelete(id);
    res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
