module.exports = [ './c1', './c2', './c3' , './comments', './comment'].map(function(controllerPath) {
	return require(controllerPath);
});