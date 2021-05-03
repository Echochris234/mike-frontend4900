const Follower = require("../models/follower");

const follow = (req, res) => {
  const follow = new Follower();
  follow.following = req.body.profileID;
  follow.follower = req.body.userID;
  follow.save((err, result) => {
    if (err) return res.status(400).json(err);
    res.status(201).json(result);
  });
};

const followerCount = (req, res) => {
  Follower.find({ following: req.body.following }).exec((err, result) => {
    if (err) return res.status(400).json(err);
    res.status(200).json({ followerCount: result.length });
  });
};

const followingCount = (req, res) => {
  Follower.find({ follower: req.body.follower }).exec((err, result) => {
    if (err) return res.status(400).json(err);
    res.status(200).json({ followingCount: result.length });
  });
};

const following = (req, res) => {
  Follower.find({
    following: req.body.profileID,
    follower: req.body.userID,
  }).exec((err, result) => {
    if (err) return res.status(400).json(err);
    let following = false;
    if (result.length > 0) {
      following = true;
    }
    res.status(200).json(following);
  });
};

const unfollow = (req, res) => {
  Follower.findOneAndDelete({
    following: req.body.profileID,
    follower: req.body.userID,
  }).exec((err, result) => {
    if (err) return res.status(400).json(err);
    console.log(result);
    res.status(200).json(result);
  });
};

module.exports = {
  follow,
  followerCount,
  followingCount,
  unfollow,
  following,
};
