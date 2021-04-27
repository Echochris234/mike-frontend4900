const Comment = require('../models/comment');
const Post = require('../models/post');

const createComment = async (req, res) => {
  const comment = new Comment(req.body);
  comment.save((err, comment) => {
    if (err) return res.json(err);
    Post.findOne({ _id: req.body.postId }).exec((err, result) => {
      if (err) return res.json(err);
      comment.populate('author').execPopulate((err, comment) => {
        if (err) return res.json(err);
        result.comments = result.comments.concat(comment._id);
        result.save();
        res.status(201).json(comment);
      });
    });
  });
};

const getComments = async (req, res) => {
  Comment.find({ postId: req.body.postId })
    .populate('author')
    .exec((err, post) => {
      if (err) return res.json(err);
      res.status(201).json(post);
    });
};

module.exports = { createComment, getComments };
