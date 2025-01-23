 
const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busNumber: String,
  capacity:Number,
 busname:String,
 start:String,
 end:String,
 date:String,

});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
