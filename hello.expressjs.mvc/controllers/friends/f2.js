var someService = require('./../../services/cars/s2');
var data = [];
for(var i = 1; i < 36; i++){
	data.push({
		imageUrl: 's/image/' + i + '.jpg',
		description: 'This is description of Dog type #' + i + '. These dogs are.. bla bla bla.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
			'Aliquam vitae rhoncus ipsum, et elementum diam. Fusce sollicitudin velit in felis lacinia ullamcorper. Pellentesque nec felis orci. ' + 
			'Suspendisse laoreet nibh non ornare sollicitudin. Quisque mi orci, bibendum id est eu, finibus vulputate nisi. Duis non libero quis ' + 
			'ligula congue lacinia. Nam nec mattis metus, lacinia sollicitudin augue. Fusce in tellus varius, molestie justo a, efficitur ipsum. ' + 
			'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus...',
		title: 'Dog type #' + i,
		id: i,
		price: 500
	});
}

module.exports = {
	path: '/timeline',
	get: function(req, res) {
		console.log('someService: ' + someService.about());
		res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify({ 
	    	topics: data
	    }));
	},
	post: function(req, res) {
		res.render('a', {
			xxx: 'YyY: Friend_2(post)'
		});
	},
	'delete': function(req, res) {
		res.render('a', {
			xxx: 'YyY: Friend_2(delete)'
		});
	}
};