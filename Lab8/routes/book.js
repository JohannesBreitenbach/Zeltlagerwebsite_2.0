const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./books.sqlite");

router.get("/", (req, res, next) => {
  console.log(req.query);

  if ("isbn" in req.query) {
    db.all(
      "SELECT * FROM books WHERE isbn=$isbn",
      { $isbn: req.query.isbn },
      function (err, row) {
        if (row.length == 1) {
          let curbook = row[0];

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
          res
            .status(404)
            .sendFile(path.join(__dirname, "..", "views", "404.html"));
        }
      }
    );
  } else {
    res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
  }
});

router.get("/add", (req, res, next) => {
  console.log("add function running...");
  const dummyBook = {
    isbn: "1234567890",
    title: "Dummy Book",
    author: "John Doe",
    description: "This is a dummy book description.",
  };

  db.run(
    "INSERT INTO books (isbn, title, author, description) VALUES ($isbn, $title, $author, $description)",
    {
      $isbn: dummyBook.isbn,
      $title: dummyBook.title,
      $author: dummyBook.author,
      $description: dummyBook.description,
    },
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).send("Error adding the book to the database.");
      } else {
        console.log("Dummy book added to the database.");
        res.send("Dummy book added to the database.");
      }
    }
  );
});

router.get("/delete", (req, res, next) => {
  console.log(req.query);
  if ("isbn" in req.query) {
    db.run(
      "DELETE FROM books WHERE isbn=$isbn",
      { $isbn: req.query.isbn },
      function (err) {
        if (err) {
          console.error("Error:", err);
          res.status(500).send("Error.");
        } else {
          console.log(`Book with ISBN ${req.query.isbn} deleted.`);
          res.send(`Book with ISBN ${req.query.isbn} deleted.`);
        }
      }
    );
  } else {
    res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
  }
});

module.exports = router;
