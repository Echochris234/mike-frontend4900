const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    article: {
      type: String,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        default: [],
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    file: {
      type: String,
    },
  },
  { timestamps: true }
);

// Will be used for searching
postSchema.index({ article: "text" });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
