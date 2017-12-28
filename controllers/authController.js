const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
const passport = require('passport');
const helper = require('../helpers')


exports.loginPage = (req, res) => {
  res.render('login', {title: '登录'})
}

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: '登录失败',
  successRedirect: '/',
  successFlash: '登录成功'
})

exports.logout = (req, res) => {
  req.logout()
  req.flash('success', '登出成功')
  res.redirect('/')
}

exports.signUp = async (req, res, next) => {
  const num = helper.randomInt(1, 2)
  const avatar = `avatar${num}.jpg`
  const user = new User({email: req.body.email, name: req.body.name, gender: req.body.gender, bio: req.body.bio, avatar})
  const register = promisify(User.register, User)
  await register(user, req.body.password)
  next()
}

exports.signUpPage = async (req, res) => {
  res.render('signup', {title: '注册'})
}

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('name')
  req.checkBody('name', '需提供昵称').notEmpty()
  req.checkBody('email', '请填写有效邮箱').isEmail()
  req.sanitizeBody('email').normalizeEmail({
    gmail_remove_dots: false,
    gmail_remove_subaddress: false,
    remove_extension: false
  })
  req.checkBody('password', '需填写密码').notEmpty()
  req.checkBody('repassword', '需填写重复密码').notEmpty()
  req.checkBody('repassword', '两次密码不一致').equals(req.body.password)

  const errors = req.validationErrors()
  if (errors) {
    req.flash('error', errors.map(err => err.msg))
    let errorList = req.flash('error')
    res.render('signup', {title: '注册123', body: req.body, error: errorList})
    return
  }
  next()
}