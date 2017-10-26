var postService = require('./../../services/posts/p1');

module.exports = {
    path: '/posts/:postId/comments/:commentId',
    get: function(req, res) {
        // TODO:
    },
    deletComment: function(req, res) {
        console.log(req.body.message);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(postService.commentsFactory.deleteComment(req.params.postId, req.params.commentId)));
    }
};