const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: '需要作者'
  },
  title: {
    type: String,
    trim: true,
    required: '需要标题'
  },
  content: {
    type: String,
    trim: true,
    required: '需要内容'
  },
  created: {
    type: Date,
    default: Date.now
  },
  pv: {
    type: Number
  }
})

module.exports = mongoose.model('Post', postSchema)