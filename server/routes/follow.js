const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  follow,
  followerCount,
  followingCount,
  unfollow,
  following,
} = require('../controller/follower');

router.post('/', auth, follow);
router.post('/followercount', followerCount);
router.post('/followingcount', followingCount);
router.post('/unfollow', auth, unfollow);
router.post('/following', auth, following);
module.exports = router;
