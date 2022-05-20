const categoryModel = require("../models/Category");

//Display all Categories
const getCategories = async (req, res, next) => {
  try {
    const categories = await categoryModel.find({});
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Display one category
const getCategory = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const category = await categoryModel.findById(id);
    res.json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Create a new CATEGORY
const createCategory = async (req, res, next) => {
  try {
    const {
      body: { name }
    } = req;
    const newCategory = await categoryModel.create({ name });
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
        name,
      }
    } = req;
    const category = await categoryModel.findByIdAndUpdate( id, { name });
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
    const category = await categoryModel.findByIdAndDelete(id);
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
