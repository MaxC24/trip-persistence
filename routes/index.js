var express = require('express');
var router = express.Router();
var models = require('../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Day = models.Day;
var Promise = require('bluebird');
var apiRouter = require('./api');

  
router.get('/', function(req, res, next) {
  Day.remove({}).exec()
  .catch(next);
  Promise.all([
    Hotel.find(),
    Restaurant.find(),
    Activity.find()
  ])

  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  });
});

router.use('/api', apiRouter );


module.exports = router;
