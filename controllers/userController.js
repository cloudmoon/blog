exports.users = async (req, res) => {
  res.render('users', {
    name: req.params.name,
    title: 'users'
  })
}