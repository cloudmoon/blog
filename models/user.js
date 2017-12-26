const mongoose = require('mongoose');
const Schema = mongoose.Schema
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    lowercase: true,
    required: '需填写昵称',
    trim: true
  },
  // password: {
  //   type: String,
  //   trim: true,
  //   required: '需填写密码'
  // },
  gender: {
    type: String,
    enum: ['m', 'f', 'o'],
    required: '请选择性别'
  },
  bio: {
    type: String
  }

})

userSchema.index({
  name: 'text'
})

userSchema.plugin(passportLocalMongoose, { usernameField: 'name' });
userSchema.plugin(mongodbErrorHandler)

module.exports = mongoose.model('User', userSchema)
