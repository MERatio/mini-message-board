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

router.get('/new', function (req, res, next) {
	res.render('form', {
		title: 'Mini Message Board | New Message',
	});
});

router.post('/new', function (req, res, next) {
	const { messageText, messageUser } = req.body;
	const newMessage = {
		text: messageText,
		user: messageUser,
		added: new Date(),
	};
	messages.push(newMessage);
	res.redirect('/');
});

module.exports = router;
