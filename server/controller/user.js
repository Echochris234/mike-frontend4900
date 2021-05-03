const User = require("../models/user");
const ProfilePic = require("../models/profilePic");
const path = require("path");
const fs = require("fs");

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

const setProfilePic = async (req, res, next) => {
  const newPicName = req.file.buffer.toString("base64");
  ProfilePic.updateOne(
    { userID: req.params.id },
    { picName: newPicName },
    { new: true, upsert: true },
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
  res.status(201).json();
};

const getProfilePic = async (req, res) => {
  console.log(req.body.userID);
  ProfilePic.findOne({ userID: req.body.userID }).exec((err, result) => {
    if (err) return res.status(404).json({ msg: "user was not found" });
    res.status(200).json({ result });
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
