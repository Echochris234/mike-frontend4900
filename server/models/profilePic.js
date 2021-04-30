const mongoose = require("mongoose");

const profilePicSchema = new mongoose.Schema({
  userID: {
    type: String,
    ref: "User",
    required: true,
  },
  picName: {
    type: String,
    require: true,
  },
});

const ProfilePic = mongoose.model("ProfilePic", profilePicSchema);

module.exports = ProfilePic;
