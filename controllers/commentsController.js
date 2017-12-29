const mongoose = require('mongoose');
const Comment = mongoose.model('Comment')

exports.addComments = async (req, res) => {
  res.send('add comments')
}

exports.removeComments = async (req, res) => {
  res.send('remove comments')
}

