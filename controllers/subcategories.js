const subcategoryModel = require("../models/Subcategory");

//Display ALL SubCategories
const getSubcategories = async (req, res, next) => {
  try {
    const subcategories = await subcategoryModel.find({}).populate("category");
    res.json(subcategories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Display one subcategory
const getSubcategory = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const subcategory = await subcategoryModel.findById(id).populate("category");
    res.json(subcategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Create a new subCATEGORY
const createSubcategory = async (req, res, next) => {
  try {
    const {
      body: { name, category },
    } = req;
    const newSubcategory = await subcategoryModel.create({ name, category });
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
        name,
        category
      }
    } = req;
    const subcategory = await subcategoryModel.findByIdAndUpdate(id, { name, category });
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
    const subcategory = await subcategoryModel.findByIdAndDelete(id);
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
