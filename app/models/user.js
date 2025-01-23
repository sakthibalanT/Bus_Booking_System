 
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  name:String,
  age:Number,
  phone:Number,
  gender:String,
  addr:String,
  adhaarno:Number,
  role:String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
