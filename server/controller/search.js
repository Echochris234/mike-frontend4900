const Post = require('../models/post');

const search = (req, res) => {
  Post.find({
    $text: {
      $search: req.params.query,
    },
  })
    .populate('author')
    .sort({ createdAt: -1 })
    .exec((err, result) => {
      if (err) return res.status(400).json(err);
      res.status(200).json({ result });
    });
};

module.exports = search;
