module.exports = {
	path: '/',
	get: function(req, res) {
		res.render('a', {
			xxx: 'YyY: HOME(get)'
		});
	},
	post: function(req, res) {
		res.render('a', {
			xxx: 'YyY: HOME(post)'
		});
	},
	'delete': function(req, res) {
		res.render('a', {
			xxx: 'YyY: HOME(delete)'
		});
	}
};