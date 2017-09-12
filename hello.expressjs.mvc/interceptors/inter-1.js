module.exports = function (req, res, next) {
	console.log('>> inter 1');
	res.header("Access-Control-Allow-Origin", "*");
	next();
};