const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// Handle GET request to /create
router.get("/", (req, res, next) => {
  // Read the create form HTML file
  fs.readFile(
    path.join(__dirname, "..", "views", "create.html"),
    "utf8",
    (err, page) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }

      // Send the create form HTML page
      res.setHeader("Content-Type", "text/html");
      res.write(page);
      res.end();
    }
  );
});

module.exports = router;
