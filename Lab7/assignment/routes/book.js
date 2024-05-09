const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// /admin/add
router.get("/", (req, res, next) => {
  console.log(req.query);

  if (
    "isbn" in req.query &&
    req.app.locals.books.find((b) => b.isbn === req.query.isbn) !== undefined
  ) {
    let curbook = req.app.locals.books.find(function (b) {
      return b.isbn === req.query.isbn;
    });

    fs.readFile(
      path.join(__dirname, "..", "views", "detail.html"),
      "utf8",
      (err, page) => {
        if (err) {
          console.error(err);
          return;
        }

        page = page.replace("{%isbn%}", curbook.isbn);
        page = page.replace("{%title%}", curbook.title);
        page = page.replace("{%author%}", curbook.author);
        page = page.replace("{%description%}", curbook.description);

        res.setHeader("Content-Type", "text/html");
        res.write(page);
        res.end();
      }
    );
  } else {
    res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
  }
});

router.post("/add", (req, res, next) => {
  const { isbn, title, author, description } = req.body;

  req.app.locals.books.push({ isbn, title, author, description });

  res.redirect("/");
});

router.post("/delete", (req, res, next) => {
  console.log("delete function called");
  const isbnToDelete = req.body.isbn;

  const bookIndex = req.app.locals.books.findIndex(
    (book) => book.isbn === isbnToDelete
  );
  if (bookIndex !== -1) {
    req.app.locals.books.splice(bookIndex, 1);
    res.redirect("/");
  } else {
    res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
  }
});

module.exports = router;
