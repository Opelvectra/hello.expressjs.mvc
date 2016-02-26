var someService = require('./../../services/cars/s2');

module.exports = {
	path: '/f2',
	get: function(req, res) {
		console.log('someService: ' + someService.about());
		res.render('a', {
			xxx: 'YyY: Friend_2(get)'
		});
	},
	post: function(req, res) {
		res.render('a', {
			xxx: 'YyY: Friend_2(post)'
		});
	},
	'delete': function(req, res) {
		res.render('a', {
			xxx: 'YyY: Friend_2(delete)'
		});
	}
};