var postService = require('./../../services/posts/p1');

module.exports = {
    path: '/posts/:id',
    get: function(req, res) {
        console.log(typeof req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(postService.postsFactory.get(req.params.id)));
    },
    'delete': function(req, res) {
        console.log(typeof req.params.id);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(postService.postsFactory.deletePost(req.params.id)));
    }
};