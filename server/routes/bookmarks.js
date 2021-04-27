const express = require("express");
const router = express.Router();
const { createBookmark, removeBookmark } = require("../controller/bookmarks");
const auth = require("../middleware/auth");

router.post("/:user", auth, createBookmark);
router.patch("/:user", auth, removeBookmark);
module.exports = router;
