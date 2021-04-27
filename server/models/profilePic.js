const mongoose = require("mongoose");

const profilePicSchema = new mongoose.Schema({
  userID: {
    type: String,
    ref: "User",
    required: true,
  },
  profilePic: {
    type: Buffer,
    required: true,
  },
  picType: {
    type: String,
    required: true,
  },
});

const ProfilePic = mongoose.model("ProfilePic", profilePicSchema);

module.exports = ProfilePic;
