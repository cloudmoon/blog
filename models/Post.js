const mongoose = require('mongoose')
const marked = require('marked')

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

function contentToHtml(post) {
  if (post) {
    post.content = marked(post.content)
  }
  return post
}

function contentsToHtml(posts) {
  if (posts) {
    return posts.map((p) => {
      p.content = marked(p.content)
      return p
    })
  }
}

postSchema.post('find', contentsToHtml)
postSchema.post('findOne', contentToHtml)

module.exports = mongoose.model('Post', postSchema)