var someService = require('./../../services/cars/s2');

module.exports = {
	path: '/f1',
	get: function(req, res) {
		var xxx = someService.about();
		console.log('someService: ' + xxx);
		res.render('a', {
			xxx: 'YyY: Friend_1(get). ' + xxx
		});
	},
	post: function(req, res) {
		res.render('a', {
			xxx: 'YyY: Friend_1(post)'
		});
	},
	'delete': function(req, res) {
		res.render('a', {
			xxx: 'YyY: Friend_1(delete)'
		});
	}
};