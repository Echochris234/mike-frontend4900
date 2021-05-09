const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  setProfilePic,
  getProfilePic,
} = require("../controller/user");
const auth = require("../middleware/auth");
const upload = multer({});
if (auth) {
  router.post("/pics/:id", upload.single("image"), setProfilePic);
}

router.get("/:id", getSingleUser);
router.post("/", createUser);
router.patch("/update", auth, updateUser);
router.delete("/deletemyaccount", auth, deleteUser);

router.post("/pics", getProfilePic);
module.exports = router;
