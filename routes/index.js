var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){
	res.render('home');
});
router.get('/about', function(req, res){
	res.render('about');
});
router.get('/contact', function(req, res){
	res.render('contact');
});


module.exports = router;