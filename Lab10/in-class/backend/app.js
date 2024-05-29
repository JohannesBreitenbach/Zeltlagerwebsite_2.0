const express = require("express");

const BookController = require("./controllers/BookControllers");

const app = express();
const port = 3333;

app.use(express.urlencoded({ extended: false }));

const { express: jwt } = require("express-jwt");
const jsonwebtoken = require("jsonwebtoken");
const cors = require("cors");

app - use(cors());

const jwtSecret = "wie2023";
app.post("/login", (req, res) => {
  res.json({
    token: jsonwebtoken.sign({ user: "USERNAME" }, jwtSecret),
  });
});

app.use(jwt)

app.get("/books", BookController.getAll);
app.get("/books/:isbn", BookController.getOne);
app.listen(port, () => {
  console.log(`Server started at: http://localhost:${port}`);
});
