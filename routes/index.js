var express = require('express');
var router = express.Router();
var formatDistance = require('date-fns/formatDistance');

// Sample messages
const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Mini Message Board',
		messages,
		formatDistance,
	});
});

module.exports = router;
