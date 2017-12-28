exports.isLogin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash('error', '请先登录')
    return res.redirect('/login')
  }
  next()
}

exports.isNotLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.flash('error', '已登录')
    return res.redirect('/back')
  }
  next()
}