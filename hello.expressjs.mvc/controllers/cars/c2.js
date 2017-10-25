var postService = require('./../../services/posts/p1');

module.exports = {
	path: '/posts',
	get: function(req, res) {
		console.log(postService.postsFactory.getAll());
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
            posts: postService.postsFactory.getAll()
        }));
	},
    post: function(req, res) {
        console.log(req.body.message);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(postService.postsFactory.post(req.body.message)));
    }
};