const Bookmark = require("../models/bookmarks");

const createBookmark = async (req, res) => {
  try {
    await Bookmark.updateOne(
      {
        userID: req.user._id,
      },
      { $addToSet: { bookmark: req.body.postID._id } },
      { new: true, upsert: true }
    );
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
};

const removeBookmark = async (req, res) => {
  try {
    await Bookmark.updateOne(
      {
        userID: req.user._id,
      },
      { $pull: { bookmark: req.body.postID._id } }
    );
    res.status(201).json(req.body.postID);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createBookmark,
  removeBookmark,
};
