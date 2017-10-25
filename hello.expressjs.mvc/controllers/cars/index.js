module.exports = [ './c1', './c2', './c3' ].map(function(controllerPath) {
	return require(controllerPath);
});