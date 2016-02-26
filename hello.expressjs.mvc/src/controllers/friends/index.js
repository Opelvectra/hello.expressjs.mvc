module.exports = [ './f1', './f2' ].map(function(controllerPath) {
	return require(controllerPath);
});