var express, app,	server, router;
	CONTROLLERS_MODULES_PATHS = [
	  './controllers/home',
 		'./controllers/friends', 
 		'./controllers/cars' 
 	],
	INTERCEPTORS_PATHS = [
		'./interceptors/inter-1', 
		'./interceptors/inter-2' 
	];

module.exports = function(expressFramework){
	express = expressFramework;
	return {
		startServer: function(onStart){
			constructor(onStart);
			return server;
		}, 
		stopServer: function(onStop){
			server.close();
		},
		getServer: function(){
			return server;
		}
	}
};

function constructor(onStart){
	app = express();
	router = express.Router();
	app.disable('x-powered-by'); // <= removes header
	setViewEngine();
	setControllers();
	setStaicFolders();
	setPort(onStart);
	console.log('It works!');
}

function setControllers() {

	var interceptors = getRoutsInterceptors(), 
			ALLOWED_METHODS = [ 
			  'all', 'get', 'post', 'put', 'delete' // and so on..
			];
	
	CONTROLLERS_MODULES_PATHS.forEach(function(modulePath){
		var indexController = require(modulePath + '/index');
		if(Array.isArray(indexController)){
			indexController.forEach(function(controller){
				applyController(controller);
			});
		} else {
			applyController(indexController);
		}
	});
	
	app.use('/', router);

	function applyController(controller) {

		var route = router.route(controller.path);
		ALLOWED_METHODS.forEach(function(method){
			if(typeof controller[method] === 'function'){
				route[method](interceptors, controller[method]);
			}
		});
	}
	
	function getRoutsInterceptors(){
		return INTERCEPTORS_PATHS.map(function(interceptorsPath){
			return require(interceptorsPath);
		});
	}
}

function setPort(onStart){
	app.set('port', process.env.PORT || 8002);
	server = app.listen(app.get('port'), function(){
		console.log('Express started press Ctrl-C, plz');
		if(typeof onStart === 'function') {
			onStart();
		}
	});
}

function setStaicFolders(){
	app.use('/s', express['static']('public'));
}

function setViewEngine(){
	var	handlebars = require('express-handlebars').create();
	app.engine('handlebars', handlebars.engine);
	app.set('view engine', 'handlebars');
	app.set('views', __dirname + '/views/');
}