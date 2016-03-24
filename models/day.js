var mongoose = require('mongoose');
var HotelSchema = require('./hotel').schema;
var RestaurantSchema = require('./restaurant').schema;
var ActivitySchema = require('./activity').schema;
var PlaceSchema = require('./place').schema;

var Day = new mongoose.Schema({
  number: Number,
  hotel: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Hotel'
  },
  restaurant: {
    type: [mongoose.Schema.Types.ObjectId],
  	ref: 'Restaurant',
    default: []
  },
  activity: {
    type: [mongoose.Schema.Types.ObjectId],
  	ref: 'Activity',
    default: []
  }
})

module.exports = mongoose.model('Day', Day);