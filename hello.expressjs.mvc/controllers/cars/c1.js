module.exports = {
	path: '/c1',
	get: function(req, res) {
		res.render('a', {
			xxx: 'YyY: Car_1(get)'
		});
	},
	post: function(req, res) {
		res.render('a', {
			xxx: 'YyY: Car_1(post)'
		});
	},
	'delete': function(req, res) {
		res.render('a', {
			xxx: 'YyY: Car_1(delete)'
		});
	}
};