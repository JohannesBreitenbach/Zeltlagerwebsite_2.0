const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
  console.log(req.query);

  if ("create" in req.query) {
    fs.readFile(
      path.join(__dirname, "..", "views", "create.html"),
      "utf8",
      (err, page) => {
        if (err) {
          console.error(err);
          return;
        }

        res.setHeader("Content-Type", "text/html");
        res.write(page);
        res.end();
      }
    );
  } else {
    res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
  }
});

module.exports = router;
