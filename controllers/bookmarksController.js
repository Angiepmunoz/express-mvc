const express = require("express");
const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmarks.js");
const { bookmarkValidator } = require("../models/validators.js");

// index - all bookmarks
bookmarks.get("/", (req, res) => {
  console.log("GET /bookmarks");

  res.json(bookmarksArray);
});

// create - add a new bookmark
bookmarks.post("/", bookmarkValidator, (req, res) => {
  console.log("POST /bookmarks", req.body);

  // In the future, a SQL Database will replace this array
  bookmarksArray.push(req.body);
  res.status(201).json(bookmarksArray[bookmarksArray.length - 1]);
});

// show - get one
bookmarks.get("/:index", (req, res) => {
  const { index } = req.params;
  console.log("GET /bookmarks/:index", index);

  if (bookmarksArray[index]) {
    res.json(bookmarksArray[index]);
  } else {
    res.status(404).json({ error: "Bookmark Not Found" });
  }
});

module.exports = bookmarks;
