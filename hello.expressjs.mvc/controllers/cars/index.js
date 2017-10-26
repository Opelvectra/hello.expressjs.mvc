module.exports = [ './c1', './c2', './c3' , './comments'].map(function(controllerPath) {
	return require(controllerPath);
});