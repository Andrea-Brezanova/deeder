require("dotenv/config");
const express = require("express");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const categoriesRouter = require("./routes/categories");
const subcategoriesRouter = require("./routes/subcategories");
const answersRouter = require("./routes/answers");
require("./db");

const app = express();
const port = process.env.PORT || 3000;

console.log("hi");

app.use(express.json());

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/categories", categoriesRouter);
app.use("/subcategories", subcategoriesRouter);
app.use("/answers", answersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
