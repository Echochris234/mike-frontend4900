const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
  createComment,
  getComments,
  numberOfComments,
} = require('../controller/comment');

router.post('/createcomment', auth, createComment);
router.post('/getcomments', getComments);
module.exports = router;
