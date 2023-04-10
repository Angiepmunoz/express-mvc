const express = require("express");
const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmarks.js");

// index - all bookmarks
bookmarks.get("/", (req, res) => { // /bookmarks
  // /bookmarks/
  res.json(bookmarksArray);
});

// show - get one
bookmarks.get("/:index", (req, res) => { // /bookmarks/:index
  const { index } = req.params;
  res.json(bookmarksArray[index]);
}); // /bookmarks/:index


module.exports = bookmarks;
