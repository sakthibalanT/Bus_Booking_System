

const mongoose = require('mongoose');

const reserveSchema = new mongoose.Schema({
  busNumber: String,
  name:String,
  username:String,
  busname:String,
 start:String,
 end:String,
 gender:String,
 phone:Number,

});

const Reserve = mongoose.model('Reserve', reserveSchema);

module.exports = Reserve;
