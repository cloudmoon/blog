const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const Comment = mongoose.model('Comment')
const marked = require('marked')

marked.setOptions({
  sanitize: true,
});

exports.posts = async (req, res) => {
  const author = req.query.author
  const query = {}
  if (author) {
    query.author = author
  }
  const posts = await Post.find(query).populate('author').sort({created: 'desc'}).then(
    (ps) => {
      return Promise.all(ps.map((p) => {
        return Comment.find({postId: p._id}).count().exec().then((count) => {
          p.commentsCount = count
          p.content = marked(p.content)
          return p
        })
      }))
    }
  )
  // const commentsPromises = posts.map((p) => {
  //   p.content = marked(p.content)
  //   return Comment.find({postId: p._id}).count().exec()
  // })

  if (author) {
    if (posts.length < 1) {
      throw Error('该博主还没有写东西')
    }
    res.render('posts', {posts, title: `${posts[0].author.name}的主页`})
  } else {
    res.render('posts', {posts, title: '主页'})
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
  const countPromise = Comment.count({postId: postId}).exec()
  const commentsPromise = Comment.find({postId: postId}).populate('author')
  const [post, pv, commentsCount, comments] = await Promise.all([postPromise, pvPromise, countPromise, commentsPromise])
  if (!post) {
    return next()
  }
  post.content = marked(post.content)
  comments.forEach(c => c.content = marked(c.content))
  post.commentsCount = commentsCount
  res.render('post', {post, title: post.title, comments})
}

const confirmOwner = (post, user) => {
  if (!post.author.equals(user._id)) {
    throw Error('你没有编辑此篇文章的权限')
  }
}

exports.editPostPage = async (req, res) => {
  const pid = req.params.id
  const user = req.user
  const post = await Post.findOne({_id: pid})
  confirmOwner(post, user)
  res.render('edit', {title: post.title, post})
}

exports.editPost = async (req, res) => {
  const pid = req.params.id
  const post = await Post.findOneAndUpdate({_id: pid}, req.body, {
    new: true,
    runValidators: true
  }).exec()
  req.flash('success', '编辑成功')
  res.redirect(`/posts/${pid}`)
}

exports.removePost = async (req, res) => {
  const pid = req.params.id
  const user = req.user
  const post = await Post.findOne({_id: pid})
  if (!post) {
    throw Error('文章不存在')
  }
  confirmOwner(post, user)
  await Post.remove({_id: pid}).exec()
  await Comment.remove({postId: pid}).exec()
  res.redirect('/posts')
}