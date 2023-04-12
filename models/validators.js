// Consider using joi for more richly featured validation
const bookmarkValidator = (req, res, next) => {
  if (req.body.hasOwnProperty("url") && req.body.hasOwnProperty("name")) {
    next();
  } else if (!req.body.url || !req.body.name){
    return res
      .status(400)
      .json({ error: "Bookmarks cannot contain empty string" });
  }else {
    return res
      .status(400)
      .json({ error: "Bookmarks must contain a url and a name" });
  }
};

module.exports = { bookmarkValidator };
