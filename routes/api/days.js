var express = require('express');
var router = express.Router();
var models = require('../../models');
var Hotel = models.Hotel;
var Restaurants = models.Restaurant;
var Activities = models.Activity;
var Places = models.Place;
var Day = models.Day;

// Get all days
router.get('/', function(req, res, next) {
	Day.find({}).exec()
	.then(function(days) {
		res.send('Here are all of the days:' + days);
	})
	.catch(next);
});

// Get one day
router.get('/:id', function(req, res, next) {
	var dayNum = req.params.id;

	Day.findOne({
		number: dayNum
	})
	.populate('hotel')
	.populate('restaurant')
	.populate('activity')
	.exec()
	.then(function(day) {
		res.json(day);
	})
	.catch(next);
});


// Create new day
router.post('/', function(req, res, next){
	Day.count({}).exec()
	.then(function(numDays) {
		var newDay = new Day({
			number: ++numDays
		});
		return newDay.save()
	})
	.then(function(newDay) {
		res.json(newDay);
	})
	.catch(next);
})

// Delete a day
router.delete('/:id', function(req, res, next){
	var dayNum = req.params.id;

	Day.find({
		number: dayNum
	})
	.remove()
	.exec()
	.then(function() {
		res.send('Day ' + dayNum + ' was removed.');
	})
	.catch(next);
})

// Updating establishments on a given day
router.put('/:id/hotels', function(req, res, next){
	console.log('request received:', req.body);
	var dayNum = req.params.id;
	var newHotel = req.body.hotel;
	Day.find({
		number: dayNum
	}).exec()
	.then(function(dayToChange) {
		dayToChange.hotel = newHotel;
		return dayToChange.save();
	})
	.then(function(savedDay) {
		res.json(savedDay)
	})
	.catch(next);
})

router.put('/:id/restaurants', function(req, res, next){
	res.send('Put req received');
})

router.put('/:id/activities', function(req, res, next){
	res.send('Put req received');
})







module.exports = router;