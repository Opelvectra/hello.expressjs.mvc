var postService = require('./../../services/posts/p1');

module.exports = {
    path: '/posts/:postId/comments/:commentId',
    get: function(req, res) {
        // TODO:
    },
    delete: function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(postService.commentsFactory.deleteComment(req.params.postId, req.params.commentId)));
    }
};