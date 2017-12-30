const mongoose = require('mongoose');
const Comment = mongoose.model('Comment')

exports.addComments = async (req, res) => {
  req.body.author = req.user._id
  const comment = await (new Comment(req.body)).save()
  req.flash('success', '留言成功')
  res.json(comment)
}

exports.removeComments = async (req, res) => {
  const user = req.user
  const cid = req.params.id
  const comment = await Comment.findOne({_id: cid})
  if (!comment) {
    throw Error('评论不存在')
  }
  confirmOwner(comment, user)
  await Comment.remove({_id: cid}).exec()
  res.redirect('back')
}

const confirmOwner = (post, user) => {
  if (!post.author.equals(user._id)) {
    throw Error('你没有权限')
  }
}

