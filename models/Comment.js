const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: '需要作者'
  },
  content: {
    type: String,
    trim: true,
    required: '需要评论内容'
  },
  created: {
    type: Date,
    default: Date.now
  },
  postId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: '需要文章id'
  },
})

module.exports = mongoose.model('Comment', commentSchema)