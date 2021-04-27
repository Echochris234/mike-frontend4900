const express = require("express");
const router = express.Router();
const {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  setProfilePic,
  getProfilePic,
} = require("../controller/user");
const auth = require("../middleware/auth");

router.get("/:id", getSingleUser);
router.post("/", createUser);
router.patch("/update", auth, updateUser);
router.delete("/deletemyaccount", auth, deleteUser);
router.post("/pics/:id", auth, setProfilePic);
router.post("/pics", getProfilePic);
module.exports = router;
