var express = require('express');
var router = express.Router();
var models = require('../../models');
var Hotel = models.Hotel;
var Restaurants = models.Restaurant;
var Activities = models.Activity;
var Places = models.Place;


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

module.exports = router;