const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:password@localhost:27017/admin');
const Schema = mongoose.Schema;

const UserSchema = new Schema({}, { strict: false });

const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;