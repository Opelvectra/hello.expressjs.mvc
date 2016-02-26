var assert = require('assert'),
	testModule = require('./../../../src/services/cars/s1');

describe('method:about', function () {
  it('Should return default 2016', function testSlash() {
  	 assert.equal(testModule.about(), 'atata(s1) (c) 2016', 'Message must match');
  });
  it('Should return correct year, if passed', function testSlash() {
 	 assert.equal(testModule.about(2214), 'atata(s1) (c) 2214', 'Message must match');
 });
});


module.exports = {
		about: function(){
			return 'atata(s1) (c) 2016';
		}
};