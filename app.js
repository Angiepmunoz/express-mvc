// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const bookmarksController = require("./controllers/bookmarksController.js");

// CONFIGURATION
const app = express();
app.use(cors()); // cors middleware allows cross-origin requests
app.use(express.json()); // json middleware parses incoming requests with JSON payloads

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

app.use("/bookmarks", bookmarksController);

app.get("*", (req, res) => {
  console.log("404!");
  res.status(404).json({ error: "Page Not Found" });
});

// EXPORT
module.exports = app;
