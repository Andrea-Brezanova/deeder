const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Subcategory = require("../models/Subcategory");

const subcategorySchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    required: true,
  },
  category_id: {
    type: String,
    required: true,
  },
});

const subcategoryModel = model("Subcategory", subcategorySchema);
module.exports = subcategoryModel;
