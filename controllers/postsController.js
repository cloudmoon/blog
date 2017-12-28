exports.posts = async (req, res) => {
  res.render('posts', {title: '主页'})
}

exports.createPost = async (req, res) => {
  res.send('发表文章')
}

exports.createPostPage = (req, res) => {
  res.render('create', {title: '发表文章'})
}

exports.onePost = async (req, res) => {
  res.send('one post')
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