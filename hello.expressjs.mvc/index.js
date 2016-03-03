var express = require('express'), 
	appConfig = require('./app-config.json'),
	app = require('./src/app')(express);

app.startServer(appConfig.dev);