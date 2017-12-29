const mongoose = require('mongoose');
const Post = mongoose.model('Post');

exports.posts = async (req, res) => {
  const author = req.query.author
  const query = {}
  if (author) {
    query.author = author
  }
  const posts = await Post.find(query).populate('author').sort({created: 'desc'})
  if (author) {
    res.render('posts', {title: `${posts[0].author.name}的主页`})
  } else {
    res.render('posts', {title: '主页'})
  }
}

exports.createPost = async (req, res) => {
  req.body.author = req.user._id
  req.body.pv = 0
  const post = await (new Post(req.body)).save()
  req.flash('success', '发表文章成功')
  res.redirect(`/posts/${post._id}`)
}

exports.createPostPage = (req, res) => {
  res.render('create', {title: '发表文章'})
}

exports.onePost = async (req, res) => {
  const postId = req.params.id
  const postPromise = Post.findOne({_id:postId}).populate('author')
  const pvPromise = Post.findOneAndUpdate({_id:postId}, {$inc: {pv: 1}}).exec()
  const [post, pv] = await Promise.all([postPromise, pvPromise])
  if (!post) {
    return next()
  }
  console.log(pv)
  res.json(post)
  // res.render('post', {post, title: post.title})
}

exports.editPostPage = async (req, res) => {
  res.send("edit post page")
}

exports.editPost = async (req, res) => {
  res.send('edit post')
}

exports.removePost = async (req, res) => {
  res.send('remove post')
}