var postService = require('./../../services/posts/p1');

module.exports = {
    path: '/posts/:postId/comments',
    get: function(req, res) {
        // TODO:
    },
    post: function(req, res) {
        console.log(req.body.message);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(postService.commentsFactory.post(req.params.postId, req.body.message)));
    }
};