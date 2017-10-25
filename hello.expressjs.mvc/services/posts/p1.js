var posts = [{
    id: 1000,
    message: 'Hi, I know Angular',
    likes: 10,
    dislikes: 50,
    comments: [{
        id: 10,
        message: 'prove it!'
    }, {
        id: 11,
        message: 'fuck off..'
    }]
}];

module.exports = {
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
            posts.push({
                id: latestId + 1,
                message: postMessage,
                likes: 0,
                dislikes: 0,
                comments: []
            });
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
    }
};