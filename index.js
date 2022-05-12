const express = require("express");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

const mongoDB = "mongodb+srv://Deeder:<AndreaKwame>@database.px0rq.mongodb.net/Deeder?retryWrites=true&w=majority";
mongoose.connect(mongoDB);

const db = mongoose.connection;

app.use(express.json());

app.use("/auth", usersRouter);
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});