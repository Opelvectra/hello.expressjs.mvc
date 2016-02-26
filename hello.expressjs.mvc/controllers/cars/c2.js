module.exports = {
	path: '/c2',
	get: function(req, res) {
		res.render('a', {
			xxx: 'YyY: Car_2(get)'
		});
	},
	post: function(req, res) {
		res.render('a', {
			xxx: 'YyY: Car_2(post)'
		});
	},
	'delete': function(req, res) {
		res.render('a', {
			xxx: 'YyY: Car_2(delete)'
		});
	}
};