exports.posts = async (req, res) => {
  res.send('主页')
}

exports.createPost = async (req, res) => {
  res.send('发表文章')
}

exports.createPostPage = async (req, res) => {
  res.send('发表文章页')
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