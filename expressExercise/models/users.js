const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Users = new Schema({
  username: { type: String },
  password: { type: String }
});

module.exports = mongoose.model('Users', Users)