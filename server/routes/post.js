const express = require("express");
const router = express.Router();
const {
  createPost,
  likePost,
  updatePost,
  deletePost,
  getPosts,
  getUserPosts,
  getASinglePost,
  getBookmarkedPosts,
} = require("../controller/post");
const auth = require("../middleware/auth");

router.post("/", auth, createPost);
router.get("/", getPosts);
router.get("/:user", getUserPosts);
router.get("/:user/post/:id", getASinglePost);
router.patch("/:id/like", auth, likePost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.get("/bookmarks/:user", auth, getBookmarkedPosts);
module.exports = router;
