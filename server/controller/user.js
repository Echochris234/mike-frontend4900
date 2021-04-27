const User = require("../models/user");
const ProfilePic = require("../models/profilePic");

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    user.generateToken();
    const token = user.tokens[user.tokens.length - 1].token;
    res.status(201).json({ result: user, token });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingleUser = async (req, res) => {
  User.findOne({ _id: req.params.id }).exec((err, result) => {
    if (err) return res.status(404).json({ msg: "user was not found" });
    return res.status(200).json(result);
  });
};

const updateUser = async (req, res) => {
  const allowedOptions = ["name", "email", "password", "confirmpassword"];
  const chosenOptions = Object.keys(req.body);
  const isMatch = chosenOptions.every((item) => allowedOptions.includes(item));
  if (!isMatch) {
    throw "Invalid Option";
  }
  try {
    const user = await User.findOne({ _id: req.user._id });
    chosenOptions.map((option) => (user[option] = req.body[option]));
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    res.status(200).json({ message: "User was removed successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const setProfilePic = async (req, res) => {
  console.log(req.files);
  //const { name, data } = req.body;
  //console.log(name + " " + data);
  /*try {
    ProfilePic.updateOne(
      { userID: req.user._id },
      { profilePic: req.body.profilePic },
      { upsert: true }
    );
    res.status(201).json();
  } catch (error) {
    res.status(500).json(error);
  }*/
};

const getProfilePic = async (req, res) => {
  ProfilePic.findOne({ userID: req.body.userID }).exec((err, result) => {
    if (err) return res.status(404).json({ msg: "user was not found" });
    console.log(result);
    return res.status(200).json(result);
  });
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  setProfilePic,
  getProfilePic,
};
