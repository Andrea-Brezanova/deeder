const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URI).catch(error => console.log(error))