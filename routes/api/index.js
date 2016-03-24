var express = require('express');
var router = express.Router();
var attractionRouter = require('./attraction');
var daysRouter = require('./days');


router.use('/', attractionRouter);
router.use('/days', daysRouter);


module.exports = router;