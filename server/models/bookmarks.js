const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  userID: {
    type: String,
    ref: "User",
    required: true,
  },
  bookmark: [String],
});

const Bookmark = mongoose.model("Bookmark", bookSchema);

module.exports = Bookmark;
