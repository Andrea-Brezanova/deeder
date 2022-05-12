const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const Schema = mongoose.Schema;

const userSchema = new Schema({
      Name: {
            type: String,
            required: true
      },
      Phone_Number: {
            type: Number,
            required: true
      },
      email: {
            type: String,
            required:true     
      },
      password: {
            type: String,
            required:true
      },
      
      Location: {
            type: String,
            required: true      
      },
})
module.exports = mongoose.model('User', userSchema);