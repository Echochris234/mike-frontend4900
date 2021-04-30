const express = require("express");
const router = express.Router();
const multer = require("multer");
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

/*const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/posts/");
  },
  filename: function (req, file, cb) {
    cb(null, `${req.body.postArticle}.png`);
  },
});
const upload = multer({ storage: storage });
*/
const upload = multer({});
if (auth) {
  router.post("/", upload.single("postExt"), createPost);
}
router.get("/", getPosts);
router.get("/:user", getUserPosts);
router.get("/:user/post/:id", getASinglePost);
router.patch("/:id/like", auth, likePost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.get("/bookmarks/:user", auth, getBookmarkedPosts);
module.exports = router;
