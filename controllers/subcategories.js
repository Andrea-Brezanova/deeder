const subcategoryModel = require("../models/Subcategory");

const getSubcategory = async (req, res, next) => {
  try {
    const subcategories = await postModel.find({});
    res.json(subcategories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Display one subcategory
const getSubcategories = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const subcategory = await subcategoryModel.findById(id);
    res.json(subcategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Create a new subCATEGORY
const createSubcategory = async (req, res, next) => {
  try {
    const {
      body: { userName, location, description, phone, categoryID },
    } = req;
    const newSubcategory = await subcategoryModel.create({ userName, location, description, phone, categoryID });
    res.json(newSubcategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Modify existing subCATEGORY
const updateSubcategory = async (req, res, next) => {
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
    const subcategory = await subcategoryModel.findByIdAndUpdate(id, { userName, location, phone });
    res.json(subcategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Remove existing subCategory
const deleteSubcategory = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const post = await subcategoryModel.findByIdAndDelete(id);
    res.json(subcategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getSubcategories,
  getSubcategory,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
};
