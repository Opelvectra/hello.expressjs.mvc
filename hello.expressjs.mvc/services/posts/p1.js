var posts = [{
    id: 1000,
    message: 'Hi, I know Angular',
    likes: 10,
    dislikes: 50,
    comments: [{
        id: 10,
        message: 'Good for you'
    }]
}];

var latestCommentId = 11;

function getLatestCommentId(){
    return latestCommentId;
}

function incrementLatestCommentId(){
    latestCommentId++;
    return getLatestCommentId();
}
var atata = {
    postsFactory: {
        get: function(id){
            return posts.filter(function(post) {
                return post.id == id;
            })[0];
        },
        getAll: function(){
            return posts;
        },
        post: function(postMessage){
            var latestId = posts.reduce( function(prev, curr) {
                console.log(prev);
                if(prev.id < curr.id){
                    return curr;
                } else {
                    return prev;
                }
            }, posts[0] || {id: -1}).id;
            console.log('>> latestId: ' + latestId);
            var result = {
                id: latestId + 1,
                message: postMessage,
                likes: 0,
                dislikes: 0,
                comments: []
            };
            posts.push(result);
            return result;
        },
        deletePost: function(id){
            var indexOfPost = -1;
            posts.forEach(function(elem, index){
                if(elem.id == id){
                    indexOfPost = index;
                }
            });
            if(indexOfPost !== -1){
                posts.splice(indexOfPost, 1);
                return 'Ok';
            } else {
                return 'Post not found';
            }
        }
    },
    commentsFactory: {
        post: function(postId, commentMessage){
            console.log('>> latestId: ' + getLatestCommentId());
            var post = atata.postsFactory.get(postId),
                result = {
                    id: incrementLatestCommentId(),
                    message: commentMessage
                };
            post.comments.push(result);
            return result;
        },
        deleteComment: function(postId, commentId){
            var post = atata.postsFactory.get(postId);
            var indexOfComment = -1;
            post.comments.forEach(function(elem, index){
                if(elem.id == commentId){
                    indexOfComment = index;
                }
            });
            if(indexOfComment !== -1){
                post.comments.splice(indexOfComment, 1);
                return 'Ok';
            } else {
                return 'Comment not found';
            }
        }
    }
};
module.exports = atata;