module.exports = [ './c1', './c2' ].map(function(controllerPath) {
	return require(controllerPath);
});