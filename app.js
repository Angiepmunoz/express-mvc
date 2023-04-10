// DEPENDENCIES
const express = require("express");
const bookmarksController = require("./controllers/bookmarksController.js");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

app.use("/bookmarks", bookmarksController); //app use mounts a specified middleware function/s at a specified path
// app.use("/movies", moviesController)

app.get("*", (req, res) => {
    res.status(404).json({error : "Page Not Found"})
})

// EXPORT
module.exports = app;
