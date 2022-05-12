require("dotenv/config");
const express = require("express");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URI);

const db = mongoose.connection;

app.use(express.json());

app.use("/auth", usersRouter);
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
