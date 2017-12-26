const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.loginPage = async (req, res) => {
  res.send('login page')
}

exports.login = async (req, res) => {
  res.send('login')
}

exports.logout = async (req, res) => {
  res.send('log out')
}

exports.signUp = async (req, res) => {
  res.send('sign up')
}

exports.signUpPage = async (req, res) => {
  res.render('signup')
}