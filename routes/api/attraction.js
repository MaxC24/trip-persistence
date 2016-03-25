var express = require('express');
var router = express.Router();
var models = require('../../models');
var Hotel = models.Hotel;
var Restaurants = models.Restaurant;
var Activities = models.Activity;
var Places = models.Place;
var Day = models.Day;


router.get('/hotels', function(req, res, next){
	Hotel.find({}).exec()
	.then(function(hotels){
		res.json(hotels);
	})
	.catch(next);
});

router.get('/restaurants', function(req, res, next){
	Restaurants.find({}).exec()
	.then(function(restaurants){
		res.json(restaurants);
	})
	.catch(next);
});

router.get('/activities', function(req, res, next){
	Activities.find({}).exec()
	.then(function(activities){
		res.json(activities);
	})
	.catch(next);
});

router.put('/:id/hotels', function(req, res, next){
	console.log('request received:', req.body);
	var dayNum = req.params.id;
	var newHotelId = req.body.hotel;
	
	console.log('req.body.hotel',req.body.hotel);

	Day.findOne({
		number: dayNum
	})
	.exec()
	.then(function(dayToChange) {
		dayToChange.hotel = newHotelId;
		return dayToChange.save();
	})
	.then(function(savedDay) {
		return Hotel.findOne({ _id : savedDay.hotel })
		.exec()
	})
	.then(function(hotel){
		res.json(hotel);
	})
	.catch(next);
});
module.exports = router;