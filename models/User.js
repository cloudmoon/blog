const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, '请输入有效邮箱地址'],
    required: '需填写邮箱'
  },
  name: {
    type: String,
    required: '需填写昵称',
    trim: true
  },
  // password: {
  //   type: String,
  //   trim: true,
  //   required: '需填写密码'
  // },
  avatar: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['m', 'f', 'o'],
    required: '请选择性别'
  },
  bio: {
    type: String,
    trim: true
  }
})

userSchema.index({
  name: 'text'
})






userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
// userSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('User', userSchema)
