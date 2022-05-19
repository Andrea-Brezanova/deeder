const { Schema, model, Types } = require("mongoose");

const categorySchema = new Schema({
      name: {
            type: String,
            required: true
      }
})

const categoryModel = model("Category", categorySchema);
module.exports = categoryModel;