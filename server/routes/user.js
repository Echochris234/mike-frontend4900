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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/profilePics/");
  },
  filename: function (req, file, cb) {
    console.log(req.body.name);
    cb(null, `${req.body.name}.png`);
  },
});
const upload = multer({ storage: storage });

router.get("/:id", getSingleUser);
router.post("/", createUser);
router.patch("/update", auth, updateUser);
router.delete("/deletemyaccount", auth, deleteUser);
router.post("/pics/:id", upload.single("image"), setProfilePic);
router.post("/pics", getProfilePic);
module.exports = router;
